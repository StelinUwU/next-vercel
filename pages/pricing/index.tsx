import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';
const index = () => {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Go to <Link href="/about">Pricing</Link>
      </h1>
      <p className="description">
        Get started by editing
        <code className="code">pages/pricing/index.js</code>
      </p>
    </>
  );
};

index.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>;
};

export default index;
