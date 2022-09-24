/* eslint-disable prettier/prettier */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const User = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      {/* Monica to build below top nav here */}
      <h2 className="text-2xl font-bold">Bill Gates</h2>
      <h2>@BillGates</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </div>
  </Main>
);

interface Posts {
  name: string;
  age: string;
}

function getPosts(): Promise<Posts[]> {
  return fetch('https://gist.githubusercontent.com/Firaasss/6d94f4e3c5a79beb26b5b3f68dd62c4a/raw/97a5bd562e31e35ec03c6929096f14e353aef161/posts.json')
    .then((res) => res.json())
    .then((res) => {
            // The response has an `any` type, so we need to cast
            // it to the `User` type, and return it from the promise
            console.log(res[0].name)
            return res as Posts[]
    })
}

// const result = document.getElementById('result')
getPosts()
//         .then(users => {
//                 result.innerHTML = users.map(u => u.).toString()
//         })
export default User;
