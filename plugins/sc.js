let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'http://s.id/0x404' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 22222222222222,
'pageCount': 200,
'contextInfo':{
'forwardingScore':200,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://github.com/wahyuricky737/test',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Mau Sc Yang Lain?,Cek Aja Channel Yt Nya',
'krishosting': me,
'thum2bnail': thumb2,
'sourceUrl': 'https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg'}},
'caption': 'http://github.com/wahyuricky737',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'α΄α΄Ι΄α΄'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'Κα΄Ι΄α΄Ιͺα΄α΄'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
