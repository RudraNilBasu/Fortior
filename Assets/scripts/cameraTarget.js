#pragma strict

var thePlayer : GameObject;
var theFriend : GameObject;

var cameraXPos : Transform;

function Start () {

}

function Update () 
{
	gameObject.transform.position.x = cameraXPos.position.x;
	gameObject.transform.position.y = (thePlayer.transform.position.y + theFriend.transform.position.y)/2;
	gameObject.transform.position.z = thePlayer.transform.position.z;
}