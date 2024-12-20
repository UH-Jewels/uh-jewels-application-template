'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { CartItems } from '@prisma/client';
import { EditCartItemSchema } from '@/lib/validationSchemas';
import { editCart } from '@/lib/dbActions';

const onSubmit = async (data: CartItems) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editCart(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditStuffForm = ({ cartItem }: { cartItem: CartItems }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CartItems>({
    resolver: yupResolver(EditCartItemSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Stuff</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={cartItem.id} />
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <input
                    type="number"
                    {...register('quantity')}
                    defaultValue={cartItem.quantity}
                    className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.quantity?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={cartItem.owner} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditStuffForm;
