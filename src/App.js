import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Web3Storage } from "web3.storage";

function App() {
	const [file, setFile] = useState(null);
	const [fileName, setFileName] = useState(null);
	const [fileSize, setFileSize] = useState(null);
	const [fileType, setFileType] = useState(null);

	const { address } = useAccount();

	const captureFile = async (e) => {
		try {
			setFile(e.target.files);
			setFileName(e.target.files[0].name);
			setFileSize(e.target.files[0].size);
			setFileType(e.target.files[0].type);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="bg-black text-white">
			<div className="flex items-center justify-between flex-row px-4 py-2">
				{/* Logo */}
				<h1 className="text-2xl font-bold">FileStorage</h1>
				<ConnectButton />
			</div>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-4xl font-extrabold">Upload files</h1>

				{address && (
					<div className="mb-8 mt-6">
						<form
							// onSubmit={(event) => {
							// 	event.preventDefault();
							// 	const description = fileDescription.value;
							// 	props.uploadFile(description);
							// }}
							className="px-4"
						>
							<div className="mt-4 flex justify-between mx-4">
								<input
									className="hidden"
									type="file"
									id="filecap"
									onChange={(e) => captureFile(e)}
								/>
								<label
									htmlFor="filecap"
									className="cursor-pointer bg-white hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold dark:bg-gray-700 dark:text-gray-100 dark:border-gray-900 transform transition hover:scale-110"
								>
									{fileName ? fileName : "Choose a file"}
								</label>
								<button
									type="submit"
									className="py-2 px-4 rounded font-bold bg-white text-blue-700 border border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-900 hover:border-transparent hover:bg-blue-500 hover:text-white transform transition hover:scale-110"
								>
									Upload!
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
