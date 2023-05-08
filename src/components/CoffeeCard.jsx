import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {
    _id,
    name,
    chef,

    taste,
    category,
    photo,
    details,
  } = coffee;

  //delete functions

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //     console.log(_id,'delete')
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body  flex w-full items-center">
        <div className="flex items-center gap-11">
          <div className="text-left">
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{taste}</p>
            <p>{category}</p>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical flex space-y-3">
              <button className="btn btn-active">Vew</button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn">Edit</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
