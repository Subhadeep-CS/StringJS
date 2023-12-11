var s="I      am a dog";

for(let i=0;i<s.length;i++)
{
    if(s[i]===" ")
    {
        continue;
    }
    else
    {
        console.log(s[i]);
    }
}