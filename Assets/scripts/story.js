#pragma strict

var theText : GameObject;

var fadeIn = false;
var fadeOut = false;

var text : UnityEngine.UI.Text;
var c : Color;



function Update()
{
	c = text.color;
	if(fadeIn)
	{
		c.a = Mathf.Lerp(0,10,5*Time.deltaTime);
		text.color=c;
	}
	if(fadeOut)
	{
		c.a = Mathf.Lerp(10,0,5*Time.deltaTime);
		text.color=c;
	}
}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		theText.SetActive(true);
		fadeIn=true;
		fadeOut=false;
	}
}

function OnTriggerExit2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		theText.SetActive(false);
		fadeOut=true;
		fadeIn=false;
	}
}