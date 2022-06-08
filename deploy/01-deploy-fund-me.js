/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// function deployFunction() {
// 	console.log("hi");
// }

// module.exports.default = deployFunction;

// module.exports = async (hre) => {
// 	const { getNamedAccounts, deployments } = hre;
// };

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
};
