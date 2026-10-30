export const moments = [
{id:'first-light',title:'First light',chapter:'01',rarity:'ORIGIN',color:'#d4f783',scene:'orbit',line:'Every universe starts with someone saying hello.'},
{id:'signal-found',title:'Signal found',chapter:'02',rarity:'RARE',color:'#b1a0ff',scene:'signal',line:'A thousand messages. One shared frequency.'},
{id:'gravity-break',title:'Gravity break',chapter:'03',rarity:'EPIC',color:'#ffb78c',scene:'gravity',line:'The moment we stopped playing by gravity’s rules.'},
{id:'midnight-crew',title:'Midnight crew',chapter:'04',rarity:'RARE',color:'#95dedc',scene:'night',line:'Different time zones. The same little corner of space.'},
{id:'supernova',title:'Supernova',chapter:'05',rarity:'LEGENDARY',color:'#edcbff',scene:'nova',line:'You had to be there. Now you can keep it.'},
{id:'home-again',title:'Home again',chapter:'06',rarity:'ORIGIN',color:'#d4f783',scene:'home',line:'Not a streak. A place to come back to.'}
];
export function newState(){return {chapter:0,voters:[],unlocked:[],claims:{},goal:3};}
export function act(state,{user,command}){const s=structuredClone(state); const card=moments[s.chapter]; if(!user||!card)return s;
 if(command==='!moment'&&!s.voters.includes(user)){s.voters.push(user);if(s.voters.length>=s.goal&&!s.unlocked.includes(card.id))s.unlocked.push(card.id);}
 if(command==='!claim'&&s.unlocked.includes(card.id)){s.claims[user]??=[];if(!s.claims[user].includes(card.id))s.claims[user].push(card.id);}
 return s;}
export function advance(state){const s=structuredClone(state);if(s.chapter<moments.length-1){s.chapter++;s.voters=[];}return s;}
export function reclaim(state,user,id){const s=structuredClone(state);if(s.unlocked.includes(id)&&user){s.claims[user]??=[];if(!s.claims[user].includes(id))s.claims[user].push(id);}return s;}
