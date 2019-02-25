const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "b!"



//bc

client.on("message", message => {
    if (message.content.startsWith("!obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "b!";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("!avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!adminbc')){
if(!message.author.id === '538063663698018325') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



  
  client.on('message', msg => {
    if(msg.content === '!help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  
  
  
  
  
  
  
  
  client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       !obc | لأرسال برود كاست للكل

       !bc  |  لأرسال برود كاست للأونلاين

      !adminbc  | هذا الامر لصاحب البوت
	  
   message.author.sendEmbed(embed)
   
   }
   });


   





   client.on('message', message => {
    if (message.content.startsWith("!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Broadcast Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[-]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                    })
}
});

const adminprefix = "!";//Fras
const devs = ['ايدي خويك','538063663698018325'];//Fras
client.on('message', message => {//Fras
  var argresult = message.content.split(` `).slice(1).join(' ');//Fras
    if (!devs.includes(message.author.id)) return;//Fras
    
if (message.content.startsWith(adminprefix + 'playing')) {//Fras
  client.user.setGame(argresult);//Fras
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)//Fras
} else //Fras
  if (message.content.startsWith(adminprefix + 'name')) {//Fras
client.user.setUsername(argresult).then//Fras
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)//Fras
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");//Fras
} else//Fras
  if (message.content.startsWith(adminprefix + 'avatar')) {//Fras
client.user.setAvatar(argresult);//Fras
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);//Fras
      } else    //Fras 
if (message.content.startsWith(adminprefix + 'streaming')) {//Fras
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//Fras
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)//Fras
}//Fras
});//Fras


client.login(process.env.BOT_TOKEN);
