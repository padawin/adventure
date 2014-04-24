/**
 * adVenture's game engine
 *
 * @param story The story to play
 * @param screen The DOM element where the text must be displayed
 * @param input The DOM element where the player will type his choices
 * @param button The DOM element where the player will validate his choices
 * @param scene Placeholder, the current scene to play
 * @param updateScreen Placeholder, function to update the screen with the new
 * 		scene
 * @param newSceneIndex Placeholder, index of the next scene to play
 */
var engine=function(story,screen,input,button,scene,updateScreen,newSceneIndex){
	// Set the initial scene
	scene=story[story._start_];
	// define the function to update the screen with a scene description
	updateScreen=function(){
		screen.innerHTML+=scene.description;
	}
	// event to validate the user's choice
	button.onclick=function(){
		// get the chosen scene's index
		newSceneIndex=scene.links[input.value];
		if(newSceneIndex){
			// update the current scene
			scene=story[newSceneIndex];
			updateScreen();
		}
	}

	// initial screen update
	updateScreen();
};
