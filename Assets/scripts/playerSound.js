#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D()
{
	gameObject.GetComponent(AudioSource).Play();
}