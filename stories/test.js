if (!stories)var stories=[];

stories[stories.length] = {
	'title': 'A test story...',
	'content': {
		'_start_': {
			'description': 'Type start to begin your journey...<br /><br />',
			'links': {
				'start': 'scene1'
			}
		},
		'scene1': {
			'description': 'Scene 1 description.<br/>2 for scene 2; 3 for scene 3<br/>',
			'links': {
				'2': 'scene2',
				'3': 'scene3'
			}
		},
		'scene2': {
			'description': 'End with scene 2',
			'links': {}
		},
		'scene3': {
			'description': 'End with scene 3',
			'links': {}
		}
	}
};
