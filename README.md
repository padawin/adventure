# adVenture

A (really) tiny adventure game engine.

## Create stories

A story must be stored in a Javascript file with the following format:

```
if (!stories)var stories=[];

stories[stories.length] = {
	'title': '[THE TITLE OF YOUR STORY]',
	'content': {
		'_start_': {
			'description': '[THE DESCRIPTION IN HTML OF YOUR START SCENE]',
			'links': {
				// The list of accessible scenes from here, the keys are the
				// keyword to be typed by the user and the value is the key of
				// the scene in the scenes list
				'sone_keyword': 'some_scene_key'
			}
		},
		'some_scene_key': {
			'description': '[THE DESCRIPTION IN HTML OF YOUR START SCENE]',
			'links': {
				// [...]
			}
		}
		// [...]
	}
};

```

Then, the story file can be included in index.html in the head tag.

## Where to play to the existing stories?

Here: http://padawin.github.io/adVenture/

## Contributions

Please feel free to create original stories and send them through pull requests.

Also any contribution in the engine are most welcome.
