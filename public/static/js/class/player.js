
class Player {
	constructor({ jumpSpeed = {
		x: 5,
		y: 5
	}, color = {
		r: 222,
		g: 150,
		b: 35,
		a: 250
	}, size = {
		width: 50,
		height: 50
	}, position = {
		x: 56,
		y: 215
	}, speed = {
		xSpeed: 50,
		ySpeed: 50
	}, lives = 3 } = {}) {
		this.color = color
		this.bounds = size
		this.position = position
		this.speed = speed
		this.lives = lives

		this.jumpSpeed = jumpSpeed
		this.hasJump = true
	}
	/**
    
    
	  Player can jump and move left and right 
	  Have a any color that the player could choose
	  Have a speeed!
	  Have sizePlayer50,
		  b: 0,
		  a: 250
		}
		else if (this.lives == 2) this.color = {//yellow
		  r: 250,
		  g: 250,
		  b: 0,
		  a: 250
		}
		else if (this.lives == 1) this.color = {//red
		  r: 250,
		  g: 0,
		  b: 0,
		  a: 250
		}
	  }**/
}
