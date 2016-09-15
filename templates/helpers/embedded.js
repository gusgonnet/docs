// Is the current page for an embedded device (as opposed to a full OS device)
module.exports = function(context) {
	return ["Photon", "Electron", "Core"].includes(context.data.root.device);
}
