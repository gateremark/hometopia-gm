import { useState } from "react";
import { FaHome, FaBath, FaBed } from "react-icons/fa";

const AddListing = () => {
	const [formData, setFormData] = useState({
		type: "rent",
		name: "",
		restrooms: 1,
		bedrooms: 1,
		parking: false,
		furnish: false,
		address: "",
		description: "",
		offer: false,
		cost: 50,
		discount: 50,
	});
	const {
		type,
		name,
		restrooms,
		bedrooms,
		parking,
		furnish,
		address,
		description,
		offer,
		cost,
		discount,
	} = formData;
	const onChange = (e) => {
		let bool = null;
		if (e.target.value === "true")  {
			bool = true
		}
		if (e.target.value === "false") {
			bool = false;
		}

		//Files
		if (e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				images: e.target.files
			}))
		}

		// Text/Boolean/Number
		if (!e.target.files){
			setFormData((prevState) => ({
				...prevState,
				[e.target.id]: bool ?? e.target.value
			}))
		}
	};
	return (
		<main className="max-w-lg px-2 mx-auto">
			<FaHome className="mt-4 m-auto text-4xl text-[#10192D]" />
			<h1 className="text-4xl text-center font-bold text-[#202e3d]">
				Add Listing
			</h1>
			<form action="" className="">
				<p className="text-xl mt-6 mb-2 text-center font-semibold text-[#202e3d]">
					Sell / Rent
				</p>
				<div className="flex gap-5">
					<button
						type="button"
						id="type"
						value="sale"
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							type === "rent"
								? "bg-[#fff] text-[#172431]"
								: "bg-[#395672] text-[#fff]"
						}`}
					>
						Sell
					</button>
					<button
						type="button"
						id="type"
						value="rent"
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							type !== "rent"
								? "bg-[#fff] text-[#172431]"
								: "bg-[#395672] text-[#fff]"
						}`}
					>
						Rent
					</button>
				</div>
				<p className="text-xl mt-6 mb-2 text-center font-semibold text-[#202e3d]">
					Property Name
				</p>
				<input
					type="text"
					id="name"
					value={name}
					onChange={onChange}
					placeholder="Enter Property Name"
					maxLength="32"
					minLength="10"
					required
					className="w-full text-center text-xl placeholder:text-[#808080] border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
				/>
				<div className="flex justify-between mx-10 mt-6 mb-3">
					<div>
						<div className="flex justify-center items-center gap-1">
							<FaBed className="text-[#202e3d]" />
							<p className="text-xl mb-2 text-center font-semibold text-[#202e3d]">
								Beds
							</p>
						</div>
						<input
							type="number"
							id="bedrooms"
							value={bedrooms}
							onChange={onChange}
							min="1"
							max="50"
							required
							className="text-center w-full text-xl border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
						/>
					</div>
					<div>
						<div className="flex justify-center items-center gap-1">
							<FaBath className="text-[#202e3d]" />
							<p className="text-xl mb-2 text-center font-semibold text-[#202e3d]">
								Rests
							</p>
						</div>
						<input
							type="number"
							id="restrooms"
							value={restrooms}
							onChange={onChange}
							min="1"
							max="50"
							required
							className="text-center w-full text-xl border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
						/>
					</div>
				</div>
				<p className="text-xl mb-2 text-center font-semibold text-[#202e3d]">
					Parking Spot
				</p>
				<div className="flex gap-5">
					<button
						type="button"
						id="parking"
						value={true}
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							!parking ? "bg-[#fff] text-[#172431]" : "bg-[#395672] text-[#fff]"
						}`}
					>
						Yes
					</button>
					<button
						type="button"
						id="parking"
						value={false}
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							parking ? "bg-[#fff] text-[#172431]" : "bg-[#395672] text-[#fff]"
						}`}
					>
						No
					</button>
				</div>
				<p className="text-xl mt-6 mb-2 text-center font-semibold text-[#202e3d]">
					Furnished
				</p>
				<div className="flex gap-5">
					<button
						type="button"
						id="furnish"
						value={true}
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							!furnish ? "bg-[#fff] text-[#172431]" : "bg-[#395672] text-[#fff]"
						}`}
					>
						Yes
					</button>
					<button
						type="button"
						id="furnish"
						value={false}
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							furnish ? "bg-[#fff] text-[#172431]" : "bg-[#395672] text-[#fff]"
						}`}
					>
						No
					</button>
				</div>
				<p className="text-xl mt-6 mb-2 text-center font-semibold text-[#202e3d]">
					Address
				</p>
				<textarea
					type="text"
					id="address"
					value={address}
					onChange={onChange}
					placeholder="Enter Address of the Property"
					required
					className="w-full text-center text-xl placeholder:text-[#808080] border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
				/>
				<p className="text-xl mt-6 mb-2 text-center font-semibold text-[#202e3d]">
					Description
				</p>
				<textarea
					type="text"
					id="description"
					value={description}
					onChange={onChange}
					placeholder="Describe the Property"
					required
					className="w-full text-center text-xl placeholder:text-[#808080] border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
				/>
				<p className="text-xl mt-6 mb-2 text-center font-semibold text-[#202e3d]">
					Offer
				</p>
				<div className="flex gap-5">
					<button
						type="button"
						id="offer"
						value={true}
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							!offer ? "bg-[#fff] text-[#172431]" : "bg-[#395672] text-[#fff]"
						}`}
					>
						Yes
					</button>
					<button
						type="button"
						id="offer"
						value={false}
						onClick={onChange}
						className={`px-7 py-2 font-medium text-base uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full cursor-pointc ${
							offer ? "bg-[#fff] text-[#172431]" : "bg-[#395672] text-[#fff]"
						}`}
					>
						No
					</button>
				</div>
				<div className="my-6">
					<div className="flex justify-between">
						<div>
							<p className="text-xl mb-2 font-semibold text-[#202e3d]">
								Regular Cost
							</p>
							<div className="flex items-center gap-1">
								<input
									type="number"
									id="cost"
									value={cost}
									onChange={onChange}
									min="50"
									max="50000000"
									required
									className="text-center text-xl border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
								/>
								{type === "rent" && (
									<p className="text-[#172431] font-medium items-center">
										$ / Month
									</p>
								)}
							</div>
						</div>

						{offer && (
							<div>
								<p className="text-xl mb-2 font-semibold text-[#202e3d]">
									Discounted Cost
								</p>
								<div className="flex items-center gap-1">
									<input
										type="number"
										id="discount"
										value={discount}
										onChange={onChange}
										min="50"
										max="50000000"
										required={offer}
										className="text-center text-xl border-[#808080] hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl rounded transition ease-in-out"
									/>
									{type === "rent" && (
										<p className="text-[#172431] font-medium items-center">
											$ / Month
										</p>
									)}
								</div>
							</div>
						)}
					</div>
				</div>

				<div>
					<p className="text-xl text-center font-semibold text-[#202e3d]">
						Images
					</p>
					<p className="text-lg italic mb-2 text-center font-light text-[#202e3d]">
						The first Image will be the cover (max 6)
					</p>
					<div className=" w-[90%] flex justify-center items-center m-auto bg-[#fff] border-[#808080] rounded hover:shadow-xl hover:bg-[#fff] focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out">
						<input
							type="file"
							id="images"
							onChange={onChange}
							accept=".jpg, .png, .jpeg, .webp"
							multiple
							required
							className="py-3 text-[#808080] cursor-pointc"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="w-full mt-10 mb-6 bg-[#10192D] text-[#fff] font-medium uppercase shadow-lg hover:shadow-xl p-2 rounded cursor-pointc text-2xl hover:bg-[#192d41] transition duration-200 ease-in-out active:bg-[#10192D]"
					title="Sell Or Rent your Home"
				>
					Create Listing
				</button>
			</form>
		</main>
	);
};

export default AddListing;
