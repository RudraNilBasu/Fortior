#pragma strict

var theBackground : GameObject;
var timeToStay : int = 8; // 8 seconds
var willFade = false;
var currentTime : float;

function Start () 
{
	currentTime=0.0f;
}

function Update () 
{
	if(Input.GetKey(KeyCode.K))
	{
		willFade=true;
	}
	if( willFade )
	{
		currentTime+=Time.deltaTime;
		var a : Color;
		//theBackground.SetActive(false);
		a = theBackground.GetComponent(SpriteRenderer).color;
		a.a =  1 - ( currentTime / timeToStay );
		//a.a = Mathf.Lerp(1.0,0.0,8*Time.deltaTime);
		if(a.a>=0)
		{
			theBackground.GetComponent(SpriteRenderer).color = a;
		}
		else
		{
			Debug.Log("Your End is now");
		}
	}
}