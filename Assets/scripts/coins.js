#pragma strict


var coinGM : GameObject;


function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		coinGM.GetComponent(coinGMS).noOfCoins++;
		Destroy(gameObject);
	}
}