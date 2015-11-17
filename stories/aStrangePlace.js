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
				be guarding the place. His outfit look like some kind\
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
			path...<br /><br />',
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
			'description': 'You take the bottle.<br />\
				There is no other choice than to <b>go on</b>.<br /><br />',
			'links': {
				'go on': 'scene6_with_bottle'
			}
		},
		'scene5': {
			'description': 'You greet the guard and ask him about the place.\
				<br />He mumbles back to you something like "<b>enter</b> or <b>\
				leave</b> but don\'t stay in the way...".<br />He does not seem to\
				be really friendly, better not chill here...<br /><br />',
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
				<b>run away</b>...<br /><br />',
			'links': {
				'throw it': 'scene8_ending',
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
				you <b>stay</b> here...<br /><br />',
			'links': {
				'stay': 'scene9',
				'run away': 'scene7'
			}
		},
		'scene7': {
			'description': 'You turn back and walk away from the butcher, who\
				watch you with a feeling of wonder and amusment in his eyes.<br />\
				Not long after you meet a woman standing here, next to a\
				strange device.</br>The woman just ignores you and leave you\
				no other choice than <b>leaving</b>.<br /><br />',
			'links': {
				'leaving': 'scene10_ending'
			}
		},
		'scene7_with_bottle': {
			'description': 'You turn back and run away from the butcher, who\
				watch you with a feeling of wonder and amusment in his eyes.<br />\
				Not long after you meet a woman standing here, next to a\
				strange device.</br>The woman ask you to <b>give</b> her some\
				money, do you accept or do you ignore her and <b>leave</b>?\
				<br /><br />',
			'links': {
				'give': 'scene11_ending',
				'leave': 'scene12_ending'
			}
		},
		'scene8_ending': {
			'description': 'The bottle you threw hit the butcher right above his\
				left eye, blood and the liquid coming from the bottle are flowing\
				on his face. You first see surprise in is gaze, but this\
				surprise is quickly, too quickly changed into anger...<br />\
				He\'s running at you, you have no other choice, you run toward\
				the exit, chased by the maddened butcher.<br/>\
				However, you forgot the guard... hearing his fellow yelling, he\
				manages to grab you, and then hits you, shouts at you! After\
				5 minutes which looked like a life, they throw you outside.<br/>\
				Half shocked, you manage to get up and walk away from this place,\
				realizing how lucky you are to be still alive...<br /><br />',
			'links': {}
		},
		'scene12_ending': {
			'description': 'The woman starts to yell at you but you ignore her\
			and head to the exit. However, you forgot the guard... hearing his\
				fellow yelling, he manages to grab you, and then hits you,\
				shouts at you! After 5 minutes which looked like a life, they\
				throw you outside.<br/>Half shocked, you manage to get up and\
				walk away from this place, realizing how lucky you are to be\
				still alive...<br /><br />',
			'links': {}
		},
		'scene9': {
			'description': 'Full of courage, you decide to stay, the butcher is\
				coming... Then, once standing just in front of you, a huge smile\
				appear on his face and he asks you if you want some meat. \
				Stunned, you tell him it\'s fine, thinking you should probably\
				<b>walk away</b>.<br /><br />',
			'links': {
				'walk away': 'scene7'
			}
		},
		'scene10_ending': {
			'description': 'You exit the store with nothing, apparently no\
				product suited your needs...<br /><br />',
			'links': {}
		},
		'scene11_ending': {
			'description': 'You give the money she asked you and then exit the\
				store with your bottle...<br /><br />',
			'links': {}
		}
	}
};
