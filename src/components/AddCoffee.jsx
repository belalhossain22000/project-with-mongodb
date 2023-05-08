import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      chef,
      suppler: supplier,
      taste,
      category,
      photo,
      details,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="md:w-[98%] mx-auto bg-[#F4F3F0] p-16">
      {/* <img src="https://i.ibb.co/n6J1bLR/2.png" alt="" /> */}
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-extralight font-extrabold">
          Add New Coffee
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          fuga, blanditiis maxime nihil ut dicta tenetur ullam tempora libero
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          fuga, blanditiis maxime nihil ut dicta tenetur ullam tempora libero
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          fuga, blanditiis maxime nihil ut dicta tenetur ullam tempora libero
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        {/* form row name and chef  */}
        <div className=" md:flex gap-4 mb-8">
          <div className="form-contro md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter your  Chef name"
                name="chef"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form row supplier and taste   */}
        <div className=" md:flex gap-4 mb-8">
          <div className="form-contro md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder=" Enter your Supplier"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Enter your taste"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form row  category and details */}
        <div className=" md:flex gap-4 mb-8">
          <div className="form-contro md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter your category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Enter details"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form row  */}
        <div className=" md:flex gap-4 mb-8">
          <div className="form-contro w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter a photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input className="btn  btn-block " type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
