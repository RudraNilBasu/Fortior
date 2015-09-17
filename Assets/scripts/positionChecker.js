#pragma strict

var position : Transform;
var doOnce : int =0;

function Start () 
{
	
}

function Update () 
{
	transform.position=position.position;
	if(Input.GetKey(KeyCode.R))
	{
		transform.rotation.z-=.005;
	}
}

function OnCollisionEnter2D(coll : Collision2D)
{
	if(coll.gameObject.tag=="Player")
	{
		doOnce++;
		if(doOnce>1)
		{
			transform.rotation.z-=.02;
		}
	}
}