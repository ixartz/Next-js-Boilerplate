import Navbar from '@/components/Navbar';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto py-4">{props.children}</div>
    </div>
  );
}
