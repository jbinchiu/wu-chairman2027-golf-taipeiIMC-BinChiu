const roster = [
  {
    "group": "第 1 組",
    "number": 1,
    "club": "基隆社",
    "name": "鄭明仁(銀)"
  },
  {
    "group": "第 1 組",
    "number": 2,
    "club": "台北社",
    "name": "張森烈(銀)"
  },
  {
    "group": "第 1 組",
    "number": 3,
    "club": "桃園社",
    "name": "陳蒼海(銀)"
  },
  {
    "group": "第 1 組",
    "number": 4,
    "club": "彰化社",
    "name": "游讚福"
  },
  {
    "group": "第 3 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "方錦龍"
  },
  {
    "group": "第 3 組",
    "number": 2,
    "club": "台北社",
    "name": "蕭川富"
  },
  {
    "group": "第 3 組",
    "number": 3,
    "club": "桃園社",
    "name": "吳東昌"
  },
  {
    "group": "第 3 組",
    "number": 4,
    "club": "嘉義社",
    "name": "侯健一"
  },
  {
    "group": "第 5 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "陳建宏"
  },
  {
    "group": "第 5 組",
    "number": 2,
    "club": "台北社",
    "name": "邱智彬"
  },
  {
    "group": "第 5 組",
    "number": 3,
    "club": "桃園社",
    "name": "林志韋"
  },
  {
    "group": "第 5 組",
    "number": 4,
    "club": "台中社",
    "name": "陳宇泰"
  },
  {
    "group": "第 7 組",
    "number": 1,
    "club": "基隆社",
    "name": "黃明發(銀)"
  },
  {
    "group": "第 7 組",
    "number": 2,
    "club": "南投社",
    "name": "張金泉(銀)"
  },
  {
    "group": "第 7 組",
    "number": 3,
    "club": "台中社",
    "name": "梁政炎(銀)"
  },
  {
    "group": "第 7 組",
    "number": 4,
    "club": "嘉義社",
    "name": "黃枝瑞(銀)"
  },
  {
    "group": "第 9 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "洪嘉駿"
  },
  {
    "group": "第 9 組",
    "number": 2,
    "club": "台北社",
    "name": "吳建國"
  },
  {
    "group": "第 9 組",
    "number": 3,
    "club": "桃園社",
    "name": "謝明君"
  },
  {
    "group": "第 9 組",
    "number": 4,
    "club": "嘉義社",
    "name": "林翰昭"
  },
  {
    "group": "第 11 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "王維農"
  },
  {
    "group": "第 11 組",
    "number": 2,
    "club": "台北社",
    "name": "黃民宗"
  },
  {
    "group": "第 11 組",
    "number": 3,
    "club": "雲林社",
    "name": "鄭文太"
  },
  {
    "group": "第 11 組",
    "number": 4,
    "club": "屏東社",
    "name": "許富大"
  },
  {
    "group": "第 13 組",
    "number": 1,
    "club": "台北社",
    "name": "黃金龍(銀)"
  },
  {
    "group": "第 13 組",
    "number": 2,
    "club": "桃園社",
    "name": "宋貴修(銀)"
  },
  {
    "group": "第 13 組",
    "number": 3,
    "club": "台中社",
    "name": "王清財(銀)"
  },
  {
    "group": "第 13 組",
    "number": 4,
    "club": "嘉義社",
    "name": "吳明吉"
  },
  {
    "group": "第 15 組",
    "number": 1,
    "club": "台北社",
    "name": "林承軒"
  },
  {
    "group": "第 15 組",
    "number": 2,
    "club": "桃園社",
    "name": "潘宸蘊"
  },
  {
    "group": "第 15 組",
    "number": 3,
    "club": "苗栗社",
    "name": "張智宏"
  },
  {
    "group": "第 15 組",
    "number": 4,
    "club": "南瀛社",
    "name": "顏閩寬"
  },
  {
    "group": "第 17 組",
    "number": 1,
    "club": "桃園社",
    "name": "謝鈞霖"
  },
  {
    "group": "第 17 組",
    "number": 2,
    "club": "苗栗社",
    "name": "陳志源"
  },
  {
    "group": "第 17 組",
    "number": 3,
    "club": "南投社",
    "name": "鄭文龍"
  },
  {
    "group": "第 17 組",
    "number": 4,
    "club": "嘉義社",
    "name": "劉邦來"
  },
  {
    "group": "第 19 組",
    "number": 1,
    "club": "台北社",
    "name": "何新發(銀)"
  },
  {
    "group": "第 19 組",
    "number": 2,
    "club": "桃園社",
    "name": "徐信炫(銀)"
  },
  {
    "group": "第 19 組",
    "number": 3,
    "club": "苗栗社",
    "name": "張萬福(銀)"
  },
  {
    "group": "第 19 組",
    "number": 4,
    "club": "南投社",
    "name": "林清雲(銀)"
  },
  {
    "group": "第 21 組",
    "number": 1,
    "club": "台中社",
    "name": "高海安(銀)"
  },
  {
    "group": "第 21 組",
    "number": 2,
    "club": "彰化社",
    "name": "黃順興"
  },
  {
    "group": "第 21 組",
    "number": 3,
    "club": "雲林社",
    "name": "李宗訓"
  },
  {
    "group": "第 21 組",
    "number": 4,
    "club": "嘉義社",
    "name": "吳俊松"
  },
  {
    "group": "第 23 組",
    "number": 1,
    "club": "台北社",
    "name": "呂良輝(銀)(素)"
  },
  {
    "group": "第 23 組",
    "number": 2,
    "club": "彰化社",
    "name": "陳州德"
  },
  {
    "group": "第 23 組",
    "number": 3,
    "club": "雲林社",
    "name": "郭建位"
  },
  {
    "group": "第 23 組",
    "number": 4,
    "club": "嘉義社",
    "name": "高義發"
  },
  {
    "group": "第 25 組",
    "number": 1,
    "club": "桃園社",
    "name": "葉時青(銀)"
  },
  {
    "group": "第 25 組",
    "number": 2,
    "club": "台中社",
    "name": "郭偉修(銀)"
  },
  {
    "group": "第 25 組",
    "number": 3,
    "club": "嘉義社",
    "name": "李宗楷(銀)"
  },
  {
    "group": "第 25 組",
    "number": 4,
    "club": "南瀛社",
    "name": "郭泰源(銀)"
  },
  {
    "group": "第 27 組",
    "number": 1,
    "club": "桃園社",
    "name": "李金輝"
  },
  {
    "group": "第 27 組",
    "number": 2,
    "club": "南投社",
    "name": "周璟輝"
  },
  {
    "group": "第 27 組",
    "number": 3,
    "club": "彰化社",
    "name": "黃祥倫"
  },
  {
    "group": "第 27 組",
    "number": 4,
    "club": "嘉義社",
    "name": "廖孝誠"
  },
  {
    "group": "第 29 組",
    "number": 1,
    "club": "基隆社",
    "name": "林榮華"
  },
  {
    "group": "第 29 組",
    "number": 2,
    "club": "彰化社",
    "name": "馬俊雄"
  },
  {
    "group": "第 29 組",
    "number": 3,
    "club": "雲林社",
    "name": "洪志雄"
  },
  {
    "group": "第 29 組",
    "number": 4,
    "club": "嘉義社",
    "name": "蕭景祥"
  },
  {
    "group": "第 31 組",
    "number": 1,
    "club": "台中社",
    "name": "蔡清欽(銀)"
  },
  {
    "group": "第 31 組",
    "number": 2,
    "club": "彰化社",
    "name": "鐘國展"
  },
  {
    "group": "第 31 組",
    "number": 3,
    "club": "台南市社",
    "name": "翁水成(銀)"
  },
  {
    "group": "第 31 組",
    "number": 4,
    "club": "高雄社",
    "name": "劉銀連(銀)"
  },
  {
    "group": "第 33 組",
    "number": 1,
    "club": "桃園社",
    "name": "康忠輝"
  },
  {
    "group": "第 33 組",
    "number": 2,
    "club": "彰化社",
    "name": "曾耀斌"
  },
  {
    "group": "第 33 組",
    "number": 3,
    "club": "嘉義社",
    "name": "許瑞麟"
  },
  {
    "group": "第 33 組",
    "number": 4,
    "club": "南瀛社",
    "name": "董濟源"
  },
  {
    "group": "第 35 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "張永興"
  },
  {
    "group": "第 35 組",
    "number": 2,
    "club": "嘉義社",
    "name": "陳俊辰"
  },
  {
    "group": "第 35 組",
    "number": 3,
    "club": "台南市社",
    "name": "劉士榮"
  },
  {
    "group": "第 35 組",
    "number": 4,
    "club": "南瀛社",
    "name": "陳振文"
  },
  {
    "group": "第 37 組",
    "number": 1,
    "club": "桃園社",
    "name": "黃琮岳"
  },
  {
    "group": "第 37 組",
    "number": 2,
    "club": "雲林社",
    "name": "洪任賢"
  },
  {
    "group": "第 37 組",
    "number": 3,
    "club": "嘉義社",
    "name": "陳世明(素)"
  },
  {
    "group": "第 37 組",
    "number": 4,
    "club": "南瀛社",
    "name": "郭珈妤"
  },
  {
    "group": "第 39 組",
    "number": 1,
    "club": "台中社",
    "name": "徐文嶽"
  },
  {
    "group": "第 39 組",
    "number": 2,
    "club": "雲林社",
    "name": "謝朝寅"
  },
  {
    "group": "第 39 組",
    "number": 3,
    "club": "嘉義社",
    "name": "游宜楷"
  },
  {
    "group": "第 39 組",
    "number": 4,
    "club": "南瀛社",
    "name": "廖庭永"
  },
  {
    "group": "早球 第 1 組",
    "number": 1,
    "club": "台南市社",
    "name": "詹騏睿"
  },
  {
    "group": "早球 第 1 組",
    "number": 2,
    "club": "南瀛社",
    "name": "曾啟能"
  },
  {
    "group": "早球 第 1 組",
    "number": 3,
    "club": "台南市社",
    "name": "杜昆穆"
  },
  {
    "group": "早球 第 1 組",
    "number": 4,
    "club": "高雄社",
    "name": "吳承澐"
  },
  {
    "group": "早球 第 3 組",
    "number": 1,
    "club": "南瀛社",
    "name": "莊欽淇"
  },
  {
    "group": "早球 第 3 組",
    "number": 2,
    "club": "南瀛社",
    "name": "李瑛關"
  },
  {
    "group": "早球 第 3 組",
    "number": 3,
    "club": "高雄社",
    "name": "詹義隆"
  },
  {
    "group": "早球 第 3 組",
    "number": 4,
    "club": "高雄社",
    "name": "吳和原"
  },
  {
    "group": "早球 第 5 組",
    "number": 1,
    "club": "南瀛社",
    "name": "張玄霖"
  },
  {
    "group": "早球 第 5 組",
    "number": 2,
    "club": "南瀛社",
    "name": "蔡文川(來賓)"
  },
  {
    "group": "早球 第 5 組",
    "number": 3,
    "club": "高雄社",
    "name": "余炎松"
  },
  {
    "group": "早球 第 5 組",
    "number": 4,
    "club": "高雄社",
    "name": "楊   恆"
  },
  {
    "group": "早球 第 7 組",
    "number": 1,
    "club": "台南市社",
    "name": "蔡佳宏"
  },
  {
    "group": "早球 第 7 組",
    "number": 2,
    "club": "高雄社",
    "name": "陳永安(銀)"
  },
  {
    "group": "早球 第 7 組",
    "number": 3,
    "club": "高雄社",
    "name": "林增埕(銀)"
  },
  {
    "group": "早球 第 7 組",
    "number": 4,
    "club": "高雄社",
    "name": "吳怡諒"
  },
  {
    "group": "早球 第 9 組",
    "number": 1,
    "club": "高雄社",
    "name": "魏松榆(銀)(素)"
  },
  {
    "group": "早球 第 9 組",
    "number": 2,
    "club": "高雄社",
    "name": "李天輝(銀)"
  },
  {
    "group": "早球 第 9 組",
    "number": 3,
    "club": "高雄社",
    "name": "黃孟稔(銀)"
  },
  {
    "group": "早球 第 9 組",
    "number": 4,
    "club": "高雄社",
    "name": "王義君(銀)"
  },
  {
    "group": "第 2 組",
    "number": 1,
    "club": "台北社",
    "name": "劉長順"
  },
  {
    "group": "第 2 組",
    "number": 2,
    "club": "桃園社",
    "name": "彭美政"
  },
  {
    "group": "第 2 組",
    "number": 3,
    "club": "嘉義社",
    "name": "賴俊達"
  },
  {
    "group": "第 2 組",
    "number": 4,
    "club": "台南市社",
    "name": "曾繁章"
  },
  {
    "group": "第 4 組",
    "number": 1,
    "club": "台北社",
    "name": "楊斐媛"
  },
  {
    "group": "第 4 組",
    "number": 2,
    "club": "新竹社",
    "name": "楊愛玉"
  },
  {
    "group": "第 4 組",
    "number": 3,
    "club": "苗栗社",
    "name": "林鎂雲"
  },
  {
    "group": "第 4 組",
    "number": 4,
    "club": "南投社",
    "name": "黃惠雲"
  },
  {
    "group": "第 6 組",
    "number": 1,
    "club": "台北社",
    "name": "李中進"
  },
  {
    "group": "第 6 組",
    "number": 2,
    "club": "桃園社",
    "name": "鄭進明"
  },
  {
    "group": "第 6 組",
    "number": 3,
    "club": "新竹社",
    "name": "賴重佑"
  },
  {
    "group": "第 6 組",
    "number": 4,
    "club": "苗栗社",
    "name": "洪錫焜"
  },
  {
    "group": "第 8 組",
    "number": 1,
    "club": "桃園社",
    "name": "李文祥"
  },
  {
    "group": "第 8 組",
    "number": 2,
    "club": "苗栗社",
    "name": "張桂章"
  },
  {
    "group": "第 8 組",
    "number": 3,
    "club": "南投社",
    "name": "張鈞宸(素)"
  },
  {
    "group": "第 8 組",
    "number": 4,
    "club": "台中社",
    "name": "洪維晨"
  },
  {
    "group": "第 10 組",
    "number": 1,
    "club": "新竹社",
    "name": "莊家卉"
  },
  {
    "group": "第 10 組",
    "number": 2,
    "club": "苗栗社",
    "name": "姜文玉"
  },
  {
    "group": "第 10 組",
    "number": 3,
    "club": "雲林社",
    "name": "楊    玲"
  },
  {
    "group": "第 10 組",
    "number": 4,
    "club": "台中社",
    "name": "蔡晨希"
  },
  {
    "group": "第 12 組",
    "number": 1,
    "club": "台中社",
    "name": "王明宇"
  },
  {
    "group": "第 12 組",
    "number": 2,
    "club": "彰化社",
    "name": "洪世泉"
  },
  {
    "group": "第 12 組",
    "number": 3,
    "club": "雲林社",
    "name": "黃則惟"
  },
  {
    "group": "第 12 組",
    "number": 4,
    "club": "嘉義社",
    "name": "賴昭平"
  },
  {
    "group": "第 14 組",
    "number": 1,
    "club": "新竹社",
    "name": "林文祥"
  },
  {
    "group": "第 14 組",
    "number": 2,
    "club": "南投社",
    "name": "陳宗億"
  },
  {
    "group": "第 14 組",
    "number": 3,
    "club": "台中社",
    "name": "劉燕飛"
  },
  {
    "group": "第 14 組",
    "number": 4,
    "club": "台南市社",
    "name": "周裕敏"
  },
  {
    "group": "第 16 組",
    "number": 1,
    "club": "台北社",
    "name": "汪貞君"
  },
  {
    "group": "第 16 組",
    "number": 2,
    "club": "桃園社",
    "name": "洪美香"
  },
  {
    "group": "第 16 組",
    "number": 3,
    "club": "台中社",
    "name": "蔡宜淳"
  },
  {
    "group": "第 16 組",
    "number": 4,
    "club": "雲林社",
    "name": "曾靖涵"
  },
  {
    "group": "第 18 組",
    "number": 1,
    "club": "桃園社",
    "name": "游文凱"
  },
  {
    "group": "第 18 組",
    "number": 2,
    "club": "苗栗社",
    "name": "梁群儒"
  },
  {
    "group": "第 18 組",
    "number": 3,
    "club": "南投社",
    "name": "黃昱盛"
  },
  {
    "group": "第 18 組",
    "number": 4,
    "club": "台南社",
    "name": "黃振芳(銀)"
  },
  {
    "group": "第 20 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "鄭宗榮"
  },
  {
    "group": "第 20 組",
    "number": 2,
    "club": "南投社",
    "name": "曾文雄"
  },
  {
    "group": "第 20 組",
    "number": 3,
    "club": "台中社",
    "name": "張永昌"
  },
  {
    "group": "第 20 組",
    "number": 4,
    "club": "彰化社",
    "name": "鐘榮瑞"
  },
  {
    "group": "第 22 組",
    "number": 1,
    "club": "新竹社",
    "name": "黃秀雲"
  },
  {
    "group": "第 22 組",
    "number": 2,
    "club": "台中社",
    "name": "徐羿甄"
  },
  {
    "group": "第 22 組",
    "number": 3,
    "club": "台中社",
    "name": "郭穗慧"
  },
  {
    "group": "第 22 組",
    "number": 4,
    "club": "彰化社",
    "name": "謝旻娟"
  },
  {
    "group": "第 24 組",
    "number": 1,
    "club": "台中社",
    "name": "蔡敬文"
  },
  {
    "group": "第 24 組",
    "number": 2,
    "club": "彰化社",
    "name": "翁坤辰"
  },
  {
    "group": "第 24 組",
    "number": 3,
    "club": "雲林社",
    "name": "陳元森"
  },
  {
    "group": "第 24 組",
    "number": 4,
    "club": "嘉義社",
    "name": "王嘉隆"
  },
  {
    "group": "第 26 組",
    "number": 1,
    "club": "台中社",
    "name": "黃堯政"
  },
  {
    "group": "第 26 組",
    "number": 2,
    "club": "彰化社",
    "name": "賴榮進"
  },
  {
    "group": "第 26 組",
    "number": 3,
    "club": "雲林社",
    "name": "林大鈞"
  },
  {
    "group": "第 26 組",
    "number": 4,
    "club": "嘉義社",
    "name": "吳灯華"
  },
  {
    "group": "第 28 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "黃瑜惠"
  },
  {
    "group": "第 28 組",
    "number": 2,
    "club": "桃園社",
    "name": "黃麗瑩"
  },
  {
    "group": "第 28 組",
    "number": 3,
    "club": "台中社",
    "name": "羅秀英"
  },
  {
    "group": "第 28 組",
    "number": 4,
    "club": "彰化社",
    "name": "張靜容"
  },
  {
    "group": "第 30 組",
    "number": 1,
    "club": "新竹社",
    "name": "張堂軒"
  },
  {
    "group": "第 30 組",
    "number": 2,
    "club": "台中社",
    "name": "王大榮"
  },
  {
    "group": "第 30 組",
    "number": 3,
    "club": "彰化社",
    "name": "施宗憲"
  },
  {
    "group": "第 30 組",
    "number": 4,
    "club": "高雄社",
    "name": "楊啟富"
  },
  {
    "group": "第 32 組",
    "number": 1,
    "club": "彰化社",
    "name": "黃緯宸"
  },
  {
    "group": "第 32 組",
    "number": 2,
    "club": "新竹社",
    "name": "張炳鈞"
  },
  {
    "group": "第 32 組",
    "number": 3,
    "club": "嘉義社",
    "name": "林仕山(銀)"
  },
  {
    "group": "第 32 組",
    "number": 4,
    "club": "南瀛社",
    "name": "吳弘凱"
  },
  {
    "group": "第 34 組",
    "number": 1,
    "club": "台中社",
    "name": "汪晨暄"
  },
  {
    "group": "第 34 組",
    "number": 2,
    "club": "台中社",
    "name": "黃錦紅"
  },
  {
    "group": "第 34 組",
    "number": 3,
    "club": "彰化社",
    "name": "王謝鎮(素)"
  },
  {
    "group": "第 34 組",
    "number": 4,
    "club": "台南市社",
    "name": "黃許巧霖"
  },
  {
    "group": "第 36 組",
    "number": 1,
    "club": "宜蘭社",
    "name": "張景堯"
  },
  {
    "group": "第 36 組",
    "number": 2,
    "club": "基隆社",
    "name": "梁清政"
  },
  {
    "group": "第 36 組",
    "number": 3,
    "club": "彰化社",
    "name": "蕭福濃"
  },
  {
    "group": "第 36 組",
    "number": 4,
    "club": "彰化社",
    "name": "趙皇式"
  },
  {
    "group": "第 38 組",
    "number": 1,
    "club": "基隆社",
    "name": "劉天佑"
  },
  {
    "group": "第 38 組",
    "number": 2,
    "club": "苗栗社",
    "name": "黃清隆"
  },
  {
    "group": "第 38 組",
    "number": 3,
    "club": "南投社",
    "name": "蘇柏諺"
  },
  {
    "group": "第 38 組",
    "number": 4,
    "club": "台中社",
    "name": "吳懋仁"
  },
  {
    "group": "第 40 組",
    "number": 1,
    "club": "桃園社",
    "name": "林鴻逸(銀)"
  },
  {
    "group": "第 40 組",
    "number": 2,
    "club": "台中社",
    "name": "廖述衍(銀)"
  },
  {
    "group": "第 40 組",
    "number": 3,
    "club": "彰化社",
    "name": "王世凱(銀)"
  },
  {
    "group": "第 40 組",
    "number": 4,
    "club": "嘉義社",
    "name": "蔡爾正(銀)"
  },
  {
    "group": "早球 第 2 組",
    "number": 1,
    "club": "台南市社",
    "name": "韓宜明"
  },
  {
    "group": "早球 第 2 組",
    "number": 2,
    "club": "南瀛社",
    "name": "翁德豐"
  },
  {
    "group": "早球 第 2 組",
    "number": 3,
    "club": "高雄社",
    "name": "林國順"
  },
  {
    "group": "早球 第 2 組",
    "number": 4,
    "club": "高雄社",
    "name": "宋順儒"
  },
  {
    "group": "早球 第 4 組",
    "number": 1,
    "club": "台南市社",
    "name": "陳清良"
  },
  {
    "group": "早球 第 4 組",
    "number": 2,
    "club": "台南市社",
    "name": "蔡雅彬"
  },
  {
    "group": "早球 第 4 組",
    "number": 3,
    "club": "高雄社",
    "name": "高清松(銀)"
  },
  {
    "group": "早球 第 4 組",
    "number": 4,
    "club": "高雄社",
    "name": "潘徽正(銀)"
  },
  {
    "group": "早球 第 6 組",
    "number": 1,
    "club": "台南市社",
    "name": "許弼凱"
  },
  {
    "group": "早球 第 6 組",
    "number": 2,
    "club": "台南市社",
    "name": "施敏惠"
  },
  {
    "group": "早球 第 6 組",
    "number": 3,
    "club": "高雄社",
    "name": "陳寀恩"
  },
  {
    "group": "早球 第 6 組",
    "number": 4,
    "club": "高雄社",
    "name": "曾金梅"
  },
  {
    "group": "早球 第 8 組",
    "number": 1,
    "club": "高雄社",
    "name": "林明朝(銀)"
  },
  {
    "group": "早球 第 8 組",
    "number": 2,
    "club": "高雄社",
    "name": "史全宏"
  },
  {
    "group": "早球 第 8 組",
    "number": 3,
    "club": "高雄社",
    "name": "莊川木"
  },
  {
    "group": "早球 第 8 組",
    "number": 4,
    "club": "高雄社",
    "name": "范世豪"
  },
  {
    "group": "早球 第 10 組",
    "number": 1,
    "club": "台南市社",
    "name": "黃鴻賓"
  },
  {
    "group": "早球 第 10 組",
    "number": 2,
    "club": "台南市社",
    "name": "曾信誠"
  },
  {
    "group": "早球 第 10 組",
    "number": 3,
    "club": "高雄社",
    "name": "紀宇牧"
  },
  {
    "group": "早球 第 10 組",
    "number": 4,
    "club": "高雄社",
    "name": "林睦峰"
  }
];
