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
				are surrounding you. Maybe if you <b>take a bottle<b/> it might\
				be of some use later.<br />\
				There is no other choice than to <b>go on</b>.<br /><br />',
			'links': {
				'take a bottle': 'scene4_with_bottle',
				'go on': 'scene6'
			}
		},
		'scene5': {
			'description': 'You greet the guard and ask him about the place.\
			<br />He mumbles back to you something like "<b>enter</b> or <b>\
			leave</b> but don\'t stay on the way...".<br />He does not seem to\
			be really friendly, better not chill here...<br />\
			<br /><br />',
			'links': {
				'enter': 'scene4',
				'leave': 'scene3_ending1'
			}
		}
	}
};
