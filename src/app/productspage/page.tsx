import { getServerSession } from 'next-auth';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProductCard from '@/components/ProductCard';
import { Jewels } from '@/lib/validationSchemas';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

const ListPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string, id: string; randomKey: string };
    } | null,
  );
  const owner = session?.user!.email ? session.user.email : '';
  const jewels: Jewels[] = await prisma.jewels.findMany({
    where: {
      owner,
    },
  });
  console.log(jewels);
  return (
    <main>
      <Container fluid className="py-3">
        <h1 className="text-center">Shop Jewels</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jewels.map((jewel) => (
            <Col key={jewel.name}>
              <ProductCard jewel={jewel} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link href="/order" passHref>
            <Button variant="primary">Place Order</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default ListPage;
