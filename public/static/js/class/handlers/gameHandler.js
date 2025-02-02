class GameHandler {
	constructor({
		levels = [],
		physics = new Physics(),
		player = new Player(),
		scoreHandler = new ScoreHandler(),
		playerHandler = new PlayerHandler({ player: player }),
		levelHandler = new LevelHandler({ levels: levels }),
		physicsHandler = new PhysicsHandler({ physics: physics }),
		renderHandler = new RenderHandler()
	} = {}) {
		this.scoreHandler = scoreHandler;
		this.playerHandler = playerHandler;
		this.levelHandler = levelHandler;
		this.physicsHandler = physicsHandler
		this.renderHandler = renderHandler
		this.gamePaused = false
		this.gameInit()
	}

	gameInit() {// start the game 
		this.physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions()) //adding player to physics handler
		const obstacles = this.levelHandler.getObstacles(this.getCurrentLevel())
		this.physicsHandler.addObstacles(obstacles, { isStatic: true }) //adding current level obtacles to physics handler
		// this.physicsHandler.addObstacles([new Obstacle(windowWidth / 2, windowHeight - 10, windowWidth, 30)], { isStatic: true })
	}

	nextFrame() {
		if (this.gamePaused) return
		this.physicsHandler.simulateWorldByOneFrame()
		this.playerHandler.updatePlayer()
		this.renderHandler.show()
	}

	movePlayerRight(speed) {
		this.playerHandler.movePlayer({ x: speed, y: 0 })
	}

	movePlayerLeft(speed) {
		this.playerHandler.movePlayer({ x: -speed, y: 0 })
	}

	movePlayerUp(jumpSpeed) {
		this.playerHandler.movePlayer({ x: 0, y: -jumpSpeed })
	}

	movePlayerDown(jumpSpeed) {
		this.playerHandler.movePlayer({ x: 0, y: jumpSpeed })
	}

	getCurrentLevel() {
		return this.levelHandler.currentLevel
	}

	setCurrentLevel(levelNumber) {
		this.levelHandler.setCurrentLevel(levelNumber)
	}

	getPreviousLevel() {
		return Math.max(this.levelHandler.currentLevel - 1, 1) //Ensure previous level always picks a positive levelNumber
	}

	getNextLevel() {
		return this.levelHandler.currentLevel + 1
	}

	togglePaused() {
		this.gamePaused = this.gamePaused ? false : true
	}

}
