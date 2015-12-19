#pragma strict

var isLeft : boolean;

var endGM : GameObject;

var theLesson : GameObject;

function OnTriggerEnter2D(coll : Collider2D)
{
	if(isLeft==true) // when player enters the collider
	{
		endGM.GetComponent(endController).left=1;
	}
	else
	{
		endGM.GetComponent(endController).right=1;
	}
	theLesson.SetActive(true);
}

function OnTriggerExit2D(coll : Collider2D)
{
	if(isLeft==true)
	{
		endGM.GetComponent(endController).left=0;
	}
	endGM.GetComponent(endController).right=0;
	theLesson.SetActive(false);
}
