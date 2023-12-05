import {Link} from "react-router-dom";

export function SampleCard() {
  return (
    <div className="flex flex-nowrap justify-between text-slate-300 bg-zinc-600  rounded-md mx-3 p-5 my-2">
      <h1 className="">texto1 title </h1>

      <button className="mx-2">Tags</button>
      <p className="mx-2 uppercase"> <Link to="/samples/abc">view</Link> </p>
      
      <p className="mx-2 lowercase">
        DD/MM/YYYY
      </p>
      <button onClick={() => console.log("texto print")} className="mx-2">Delete</button>
    </div>


  );
}

//<button to={`/tasks/${task._id}`}>Edit</button>
