export default {
	discordToken: 'OTQxODMzODMzMDAxNjcyNzY1.YgbtHA.I9LWcbafpEjnPMvuDwihMpEaR7w',
	guilds: [
		{
			guildId: '929463494192017449',
			vouchChannel: '940928628236124201',
			logChannel: '940928589807894529',
			moderators: ['169887202493333505'],
			marketplaceRole: '760214956632703036',
			marketAccess: 3, // count of minimum vouches >=
			marketTimeout: 12, // waiting time in hours per message
		},
	],
	botID: '941833833001672765',
	blockFile: './models/blocked.json',
	vouchFile: './models/vouches.json',
	commands: {
		// renaming commands
		base: 'vouch',
		vouchHelp: 'help',
		vouchTopList: 'top',
		vouchBlock: 'block',
		vouchUnblock: 'unblock',
		vouchSingleList: 'list',
		vouchReset: 'reset',
		vouchRemove: 'remove',
	},
	executor: '!',
	version: '0.4.0b',
}
