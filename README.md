# Music-Game
Yung Men Music Game

WHEN the user enters the main menu:
	THEN create back button to previous screen function
	AND display the Menu Screen and Buttons ("Rules", "Songs", "Settings")
	
WHEN "Songs" is selected:
	THEN display default/downloaded songs and create new "back button" set to main menu
	WHEN a song is clicked 
		THEN highlight selected song, begin playing the song, and display "Play" or "Create" buttons
	WHEN "Play" button is clicked:
		THEN stop playing music and display a list of created songs (empty state = "you have no created or downloaded songs")
	WHEN "Start" button is clicked:
		THEN get corresponding highlighted song and give it to GAME 
		DISPLAY GAME screen
		CALL game loop
		START GAME
		
  WHEN in SONG EDITOR:
		DISPLAY controls for moving and adding notes (hold and tap)
		DISPLAY "Song Time Slider"
