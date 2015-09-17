#pragma strict
import UnityEngine.UI;

var noOfCoins : int ;
var theText : UI.Text;
function Start () 
{
	noOfCoins=0;
}

function Update () 
{
	theText.text = "X "+noOfCoins;
}