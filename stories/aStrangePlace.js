if (!stories)var stories=[];

stories[stories.length] = {
	'title': 'A Strange place',
	'content': {
		'_start_': {
			'description': 'You are facing a strange building with \
				walls made of dark glass. The entrance is surrounded \
				with lights of different colors.<br />That same\
				entrance seems to be opened.<br /><br />You see no other choice\
				than <b>enter</b> or <b>leave</b>...<br /><br />',
			'links': {
				'enter': 'scene2',
				'leave': 'scene3_ending1'
			}
		},
		'scene2': {
			'description': 'You enter the building.<br />You are now in\
				a vestibule. On your left, you see someone who seems to\
				be guarding the place. Hss outfit look like some kind\
				of light and flexible black armor.<br />You can <b>ask</b> the\
				guard about the place, or ignore him and <b>enter</b> in\
				the next room.<br /><br />',
			'links': {
				'enter': 'scene4',
				'ask': 'scene5'
			}
		},
		'scene3_ending1': {
			'description': 'You chose to leave. You probably missed a\
			great adventure, but who knows what you will find on your\
			path...',
			'links': {}
		},
		'scene4': {
			'description': 'The place looks like a maze... A maze filled with\
				shelves full of objects: containers, vegetables and other things\
				are surrounding you. Maybe if you <b>take a bottle</b> it might\
				be of some use later, otherwise, you can <b>go on</b>.<br />\
				<br />',
			'links': {
				'take a bottle': 'scene4_with_bottle',
				'go on': 'scene6'
			}
		},
		'scene4_with_bottle': {
			'description': 'The place looks like a maze... A maze filled with\
				shelves full of objects: containers, vegetables and other things\
				are surrounding you.<br />\
				There is no other choice than to <b>go on</b>.<br /><br />',
			'links': {
				'go on': 'scene6_with_bottle'
			}
		},
		'scene5': {
			'description': 'You greet the guard and ask him about the place.\
				<br />He mumbles back to you something like "<b>enter</b> or <b>\
				leave</b> but don\'t stay in the way...".<br />He does not seem to\
				be really friendly, better not chill here...<br />\
				<br /><br />',
			'links': {
				'enter': 'scene4',
				'leave': 'scene3_ending1'
			}
		},
		'scene6_with_bottle': {
			'description': 'Just after turning in an alley, you suddenly find\
				yourself facing a butcher busy chopping the leg of some dead\
				animal his huge bloody knife!<br />\
				He slowly raise his head and sees you, his eyes are shining. He\
				comes to you, his knife still in his hand...\
				You remember the bottle you took a while earlier, maybe if you\
				<b>throw it</b> at his face, this will give you some time to\
				<b>run away</b>...',
			'links': {
				'throw it': 'scene8',
				'run away': 'scene7_with_bottle'
			}
		},
		'scene6': {
			'description': 'Just after turning in an alley, you suddenly find\
				yourself facing a butcher busy chopping the leg of some dead\
				animal his huge bloody knife!<br />\
				He slowly raise his head and sees you, his eyes are shining. He\
				comes to you, his knife still in his hand...\
				Many would <b>run away</b>, but who knows what can happen if\
				you <b>stay</b> here...',
			'links': {
				'stay': 'scene9',
				'run away': 'scene7'
			}
		}
	}
};
