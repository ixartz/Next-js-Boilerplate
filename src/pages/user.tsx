import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// Function to load data here

const User = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>

  <div>
    {/* Monica to build below top nav here */}
    <h2 className="text-2xl font-bold">Bill Gates</h2>
    <h2>@BillGates</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>

    {/* Posts below here eventually */}
  </div>

  </Main>
);

export default User;
