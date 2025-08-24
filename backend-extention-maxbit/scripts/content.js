
//---------------------------Common variables
let storageData = null
let count, bets, avg, userid, dateTemp, kfBonus, hold, depBonusAvail, diffAllTime, diffPlayersReport, diffGamesReport, currCashback, status_tag, accountCurrId
let globalLastCashbackDate, globalLastBezdepDate, globalLastCashoutDate, globalLastCashbackName
let projectsDynamicStatuses = ['izzi', 'volna', 'drip', 'legzo', 'starda', 'monro', '1go', 'lex','gizbo','irwin']
let projectsSegments = ['fresh', 'sol', 'jet', 'rox', 'izzi', 'volna', 'drip', 'legzo', 'starda', 'monro', '1go', 'lex', 'gizbo','irwin']
let projectsOld = []
let statuses = ['Premium A', 'Premium B', 'PREMIUM', 'TOP', 'GOLD', 'Мастер', 'ELITE', 'STEADY', 'HERO', ]
let statusesVIP = ['VIP', 'Профессионал', 'PLATINUM', 'PRO', 'D-segment', 'A-segment', 'B-segment', 'C-segment', 'SUPREME', 'GO', 'LEGEND', 'MASTER', 'LEGEND']
let statusesALL = ['Premium A', 'Premium B', 'D-segment', 'A-segment', 'B-segment', 'C-segment', 'Segment A', 'Segment B', 'Segment C']
let bezdeps = [/FREE SPIN BONUS/, /PERSONAL FREE SPINS/, /\sBONUS$/, /\sBONUS M$/, /LOYALTY BONUS/, /Bgaming A Free Spin RUB/, /Bgaming B Free Spin RUB/, /Bgaming C Free Spin RUB/, /PragmaticPlay TOP 100 RUB/, /Belatra TOP 100 RUB/]
let personalBezdeps = [/FREE SPIN BONUS/, /PERSONAL FREE SPINS/, /LOYALTY BONUS/, /PERSONAL BONUS/, /Bgaming A Free Spin RUB/, /Bgaming B Free Spin RUB/, /Bgaming C Free Spin RUB/, /PragmaticPlay TOP 100 RUB/, /Belatra TOP 100 RUB/]
let personalVipBonuses = [/INSURANCE BONUS/, /%/]
let newPersonalBezdeps = [/LOYALTY BONUS/, /NO DEPOSIT PERSONAL BONUS/, /Bgaming A Free Spin /, /Bgaming B Free Spin /, /Bgaming C Free Spin /, /PragmaticPlay TOP 100 /, /Belatra TOP 100 /]
let newPersonalDeps = [/DEPOSIT BONUS B/, /DEPOSIT BONUS A/]
let isVip = false
let projectsDynamicCash = ['fresh', 'sol', 'drip', 'monro', '1go', 'lex', 'gizbo','irwin']
let oneWeekTags = ['Premium B', 'D-segment', 'NO PREMIUM', 'ELITE']
let twoWeekTags = ['Premium A', 'A-segment', 'B-segment', 'C-segment', 'SUPREME']
let newLoyaltyProject = ['monro', 'drip', 'legzo', 'starda', 'volna', 'izzi', 'jet', 'fresh', 'rox', 'sol', '1go', 'lex', 'gizbo','irwin']
let newSegmentBonusDepCount =
{
  'Segment A': 2,
  'Segment B': 2,
  'Segment C': 2,
  'VIP СЕГМЕНТ': 1,
}
let newSegmentBonusCount = 
  {
    'Segment A': 3,
    'Segment B': 2,
    'Segment C': 1,
    'VIP СЕГМЕНТ': 0,
  }


let newLoyalInfoCurrAmount = {
  RUB: {
    min: 10,
    round: 100
  },
  USD: {
    min: 1,
    round: 5
  },
  EUR: {
    min: 1,
    round: 5
  },
  UAH: {
    min: 100,
    round: 25
  },
  PLN: {
    min: 5,
    round: 5
  },
  KZT: {
    min: 500,
    round: 1000
  },
  CAD: {
    min: 1,
    round: 5
  },
  BRL: {
    min: 1,
    round: 5
  },
}

let minAmountSegment =  {
  RUB: {
    amount: 20000,
    name: 'рублей',
  },
  EUR: {
    amount: 300,
    name: 'евро',
  }	,
  USD: {
    amount: 300,
    name: 'долларов',
  }	,
  UAH: {
    amount: 12000,
    name: 'гривен',
  }	,
  KZT: {
    amount: 150000,
    name: 'тенге',
  }	,
  NOK: {
    amount: 3000,
    name: 'крон',
  }	,
  PLN: {
    amount: 1500,
    name: 'злотых',
  }	,
  TRY: {
    amount: 6000,
    name: 'лир',
  }	,
  CAD: {
    amount: 400,
    name: 'CAD',
  }	,
  AUD: {
    amount: 500,
    name: 'AUD',
  }	,
  AZN: {
    amount: 550,
    name: 'AZN',
  }	,
  NZD: {
    amount: 600,
    name: 'NZD',
  }	,
  BRL: {
    amount: 1700,
    name: 'BRL',
  }	,
  INR: {
    amount: 25000,
    name: 'INR',
  }	,
  MXN: {
    amount: 6000,
    name: 'MXN',
  }	,
  PEN: {
    amount: 1200,
    name: 'PEN',
  }	,
  NGN: {
    amount: 150000,
    name: 'NGN',
  }	,
  ZAR: {
    amount: 6000,
    name: 'ZAR',
  }	,
  CLP: {
    amount: 250000,
    name: 'CLP',
  }	
}
let minAmountOld =  {
  RUB: {
    amount: 20000,
    name: 'рублей',
  },
  INR: {
    amount: 20000,
    name: 'INR',
  },
  EUR: {
    amount: 400,
    name: 'EUR',
  },
  USD: {
    amount: 400,
    name: 'USD',
  },
  CAD: {
    amount: 400,
    name: 'CAD',
  },
  AUD: {
    amount: 400,
    name: 'AUD',
  },
  NZD: {
    amount: 400,
    name: 'NZD',
  },
  UAH: {
    amount: 8000,
    name: 'гривен',
  },
  MXN: {
    amount: 8000,
    name: 'MXN',
  },
  KZT: {
    amount: 120000,
    name: 'тенге',
  },
  NOK: {
    amount: 2000,
    name: 'NOK',
  },
  TRY: {
    amount: 2000,
    name: 'TRY',
  },
  BRL: {
    amount: 2000,
    name: 'BRL',
  },
  PEN: {
    amount: 2000,
    name: 'PEN',
  },
  PLN: {
    amount: 1000,
    name: 'PLN',
  },
  ARS: {
    amount: 40000,
    name: 'ARS',
  },
  NGN: {
    amount: 200000,
    name: 'NGN',
  },
  ZAR: {
    amount: 6000,
    name: 'ZAR',
  },
  CLP: {
    amount: 400000,
    name: 'CLP',
  },
}

const cashbackDynamic = {
  RUB: [5000, 10001, 25001, 50001, 100001, 200001, 500001, 1000001, 1500001, 2300001, 3500001, 6000001, 10000001, 15000001, 22500001, 33500001, 50000001],
  EUR: [50, 101, 251, 501, 1001, 2001, 5001, 10001, 15001, 23001, 35001, 60001, 100001, 150001, 225001, 335001, 500001],
  USD: [50, 101, 251, 501, 1001, 2001, 5001, 10001, 15001, 23001, 35001, 60001, 100001, 150001, 225000, 335001, 500001],
  UAH: [2000, 4001, 10001, 20001, 40001, 80001, 200000],
  KZT: [25000, 500001, 100001, 200001, 500001, 1000001, 2500000],
  NOK: [500, 1001, 2501, 5001, 10001, 20001, 50000],
  PLN: [250, 501, 1001, 2501, 5001, 10001, 25000],
  TRY: [500, 1001, 2501, 5001, 10001, 20001, 50000],
  CAD: [50, 101, 251, 501, 1001, 2001, 5000], 
  AUD: [50, 101, 251, 501, 1001, 2001, 5000],
  AZN: [200, 401, 601, 1001, 3001, 6001, 12000],
  NZD: [50, 101, 251, 501, 1001, 2001, 5000],
  BRL: [500, 1001, 1501, 2501, 7501, 15001, 30000],
  INR: [5000, 10001, 25001, 50001, 100001, 200001, 500000],
}

const cashbackPermament = {
  RUB: 5000,
  EUR: 100,
  USD: 100,
  UAH: 2000,	
  KZT: 30000,	
  NOK: 500,
  PLN: 250,	
  TRY: 250,	
  CAD: 150,	
  AUD: 150,	
  AZN: 200,	
  NZD: 150,	
  BRL: 500,	
  INR: 5000,	
  ARS: 200000,	
  MXN: 40000,	
  PEN: 10000,	
  NGN: 1000000,	
  ZAR: 30000,	
  CLP: 2000000,
}

const currencyNames = {
  RUB: 'рублей',
  EUR: 'евро',
  USD: 'долларов',
  UAH: 'гривен',	
  KZT: 'тенге',	
  NOK: 'NOK',
  PLN: 'злотых',	
  TRY: 'TRY',	
  CAD: 'CAD',	
  AUD: 'AUD',	
  AZN: 'AZN',	
  NZD: 'NZD',	
  BRL: 'BRL',	
  INR: 'INR',	
  ARS: 'ARS',	
  MXN: 'MXN',	
  PEN: 'PEN',	
  NGN: 'NGN',	
  ZAR: 'ZAR',	
  CLP: 'CLP',
}

const pointsBetAmounts = {
  rox: {
    RUB: 4000,
    EUR: 60,
    USD: 65,
    KZT: 25000,
    NOK: 600,
    PLN: 250,
    TRY: 250,
    UAH: 1600
  },
  sol: {
    RUB: 4200,
    EUR: 70,
    USD: 70,
    KZT: 25000,
    NOK: 700,
    PLN: 280,
    TRY: 280,
    UAH: 1700,
    CAD: 100,
    AUD: 100,
    AZN: 150,
    NZD: 100,
    BRL: 350, 
    INR: 4200,
    ARS: 7000,
    MXN: 1400, 
    PEN: 280,
    NGN: 28000,
    ZAR: 1050, 
    CLP: 70000,
    DKK: 700,
    SEK: 700,
    RON: 350,
    HUF: 28000,
    JPY: 7000
  },
  fresh: {
    RUB: 4000,
    EUR: 50,
    USD: 50,
    UAH: 1500,
    KZT: 25000,
    NOK: 400,
    PLN: 200,
    TRY: 400,
    CAD: 75,
    AUD: 75,
    AZN: 100,
    NZD: 75,
    BRL: 250,
    INR: 4000,
    ARS: 5000,
    MXN: 1000,
    PEN: 250,
    NGN: 25000,
    ZAR: 750,
    CLP: 50000,
    JPY: 7500
  }, 
  jet: {
    RUB: 4000,
    EUR: 50, 
    USD: 50,
    UAH: 1500,
    KZT: 20000,
    NOK: 550,
    PLN: 250,
    TRY: 400,
    CAD: 75,
    AUD: 75,
    AZN: 100,
    NZD: 75,
    BRL: 250,
    INR: 4000,
    ARS: 5000,
    MXN: 1000,
    PEN: 250,
    NGN: 25000,
    ZAR: 750,
    CLP: 50000
  },
  volna: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
  },
  legzo: {
    RUB:	1000,
    EUR:	10,
    USD:	10,
    UAH:	400,
    KZT:	6000,
    NOK:	100,
    PLN:	50,
    TRY:	100,
    CAD:	20,
    AUD:	20,
    AZN:	20,
    NZD:	20,
    BRL:	50,
    INR:	1000,
    ARS:	2000,
    MXN:	200,
    PEN:	40,
    NGN:	8500,
    ZAR:	200,
    CLP:	8500,
    DKK:	200,
    SEK:	200,
    RON:	100,
    HUF:	8000,
    JPY:	2000
  },
  starda: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
  },
  drip: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
  },
  monro: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
  },
  lex: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
  },
  gizbo: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
},
  irwin: {
    RUB: 1000,
    EUR: 20, 
    USD: 20, 
    UAH: 400,
    KZT: 6000,
    NOK: 100,
    PLN: 50,
    TRY: 100,
    CAD: 20,
    AUD: 20,
    AZN: 40,
    NZD: 20,
    BRL: 100,
    INR: 1000,
    ARS: 2000,
    MXN: 400,
    PEN: 100,
    NGN: 10000,
    ZAR: 300,
    CLP: 20000,
    DKK: 200,
    SEK: 200,
    RON: 100,
    HUF: 8000,
    JPY: 2000
  }
}

const pointsDays = {
  rox: {
    min: 31*86400000,
    max: 91*86400000
  },
  jet: {
    min: 31*86400000,
    max: 91*86400000
  },
  sol: {
    min: 31*86400000,
    max: 91*86400000
  },
  izzi: {
    min: 31*86400000,
    max: 91*86400000
  },
  fresh: {
    min: 31*86400000,
    max: 91*86400000
  },
  volna: {
    min: 31*86400000,
    max: 91*86400000
  },
  legzo: {
    min: 31*86400000,
    max: 91*86400000
  },
  starda: {
    min: 36*86400000,
    max: 96*86400000
  },
  drip: {
    min: 31*86400000, 
    max: 91*86400000
  },
  monro: {
    min: 31*86400000, 
    max: 91*86400000
  },
  lex: {
    min: 31*86400000, 
    max: 91*86400000
  },
  gizbo: {
    min: 31*86400000, 
    max: 91*86400000
   },
  irwin: {
    min: 31*86400000, 
    max: 91*86400000
  }
}

const pointsStatuses = {
  volna: {
    prem: {
      name: 'Мастер',
      min: 200,
      max: 450
    },
    vip: {
      name: 'Профессионал',
      min: 350,
      max: 800
    }
  },
  drip: {
    prem: {
      name: 'Prime',
      min: 200,
      max: 400
    },
    vip: {
      name: 'Meta',
      min: 350,
      max: 800
    }
  },
  legzo: {
    prem: {
      name: 'Gold',
      min: 200,
      max: 450
    },
    vip: {
      name: 'Platinum',
      min: 350,
      max: 800
    }
  },
  starda: {
    prem: {
      name: 'Top',
      min: 1500
    },
    vip: {
      name: 'Pro',
      min: 3000
    }
  },
  izzi: {
    prem: {
      name: 'Premium',
      min: 200000,
      max: 450000
    },
    vip: {
      name: 'Vip',
      min: 350000,
      max: 800000
    }
  },
  monro: {
    prem: {
      name: 'ELITE',
      min: 200,
      max: 450
    },
    vip: {
      name: 'SUPREME',
      min: 350,
      max: 800
    }
  },
}

async function getReoprtDepositsAndGamesActivity (project, userId, dateFrom, dateTo, gameCategory, currency) {
  if (gameCategory == 'live' && project == 'starda') gameCategory = 'live_casino'
  if (gameCategory == 'live' && project == 'drip') gameCategory = 'casino_live'
  if (gameCategory == 'live' && project == 'monro') gameCategory = 'live_casino'
  if (gameCategory == 'slots' && project == 'monro') gameCategory = 'play_slots'
  if (gameCategory == 'live' && project == 'lex') gameCategory = 'live_casino_online'
  if (gameCategory == 'slots' && project == 'lex') gameCategory = 'slots_online'
  if (gameCategory == 'live' && project == 'gizbo') gameCategory = 'online_live_casino'
  if (gameCategory == 'slots' && project == 'gizbo') gameCategory = 'online_casino_slots'
  if (gameCategory == 'live' && project == 'irwin') gameCategory = 'casino_live'
  if (gameCategory == 'slots' && project == 'irwin') gameCategory = 'casino_slots'
  let reportUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/players/${userId}?activity_report[from]=${dateFrom}&activity_report[to]=${dateTo}&activity_report[sum_period]=year&activity_report[game_category]=${gameCategory}&activity_report[bet_type]=casino_bets&commit=%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80`
  let response = await fetch(reportUrl, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
   }
  })
  let data = await response.text()
  let reportActivityPage = new window.DOMParser().parseFromString(data, 'text/html')
  let reportActivityTable = reportActivityPage.querySelectorAll('.total-row')[1].parentElement
  // console.log(reportActivityTable)
  let responseActivityAmount = 0
  if (reportActivityTable) {
    for (let i = 0; i <= reportActivityTable.rows.length - 1; i++) {
      if (reportActivityTable.rows[i].cells[0].innerText == currency) {
        responseActivityAmount = parseFloat(reportActivityTable.rows[i].cells[7].innerText.replaceAll(',', '.'))
        break
      } responseActivityAmount = 0
    }
  } else responseActivityAmount = 'some error'
  // console.log(responseActivityAmount)
  return responseActivityAmount
}

async function getBonusesAndFsAmount (project, userId, dateAfter, dateBefore, issue) {
  let bonusOrFsAmount = 0;
  // let bonusesAndFsUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/balance_transactions?filters%5Baccount_id%5D=${userId}&filters%5Bcreated_after%5D=${dateAfter}%2000%3A00%3A00&filters%5Bcreated_before%5D=${dateBefore}%2023%3A59%3A59&filters%5Breference_type%5D=${issue}&sort%5Bby%5D=created_at&sort%5Border%5D=desc&limit=10&offset=0&locale=ru`
  // let bonusesAndFsUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/balance_transactions?q={"accountId":"${userId}","createdAfter":"${dateAfter} 00:00:00","createdBefore":"${dateBefore} 23:59:59","referenceType":"${issue}"}`
  // let bonusesAndFsUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/balance_transactions?filters[account_id]=${userId}&filters[created_after]=${dateAfter}%2000:00:00&filters[created_before]=${dateBefore}%2023:59:59&filters[reference_type]=${issue}&sort%5Bby%5D=created_at&sort%5Border%5D=desc&limit=50&offset=0&locale=ru`
  let bonusesAndFsUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/balance_transactions?filters[account_id]=${userId}&filters[created_after]=${dateAfter}%2000:00:00&filters[created_before]=${dateBefore}%2023:59:59&filters[reference_type]=${issue}&sort%5Bby%5D=created_at&sort%5Border%5D=desc&limit=50&offset=0&locale=ru`
  // console.log(bonusesAndFsUrl)
  let response = await fetch(bonusesAndFsUrl, {
    headers: {
      "Accept": "application/json, text/plain, */*"
    }
  })
  let data = await response.text()
  // console.log(data)
  let responseJSON = JSON.parse(data)
  // console.log(responseJSON)
  if(responseJSON.balance_transactions.length != 0){
    for (let i = 0; i<=responseJSON.balance_transactions.length - 1; i++) {
      bonusOrFsAmount += responseJSON.balance_transactions[i].amount_cents/100
    }
  }
  // console.log(bonusOrFsAmount)
  return bonusOrFsAmount
}

async function getNewCashbackByFilters (project, userId, accountId, dateFrom, dateTo, currency) {
  // let newCashbackResponse = {
  //   slotActivityAmount: 0,
  //   allActivityAmount: 0,
  //   LiveActivityAmount: 0,
  //   bonusesIssueAmount: 0,
  //   fsIssueAmount: 0,
  //   cashbackAmount: 0,
  //   script: '',
  //   finalAmount: 0,
  //   liveCashbackAmount: 0,
  //   percentage: 0,
  //   availalbe: false,
  // } 
  // newCashbackResponse.slotActivityAmount = await getReoprtDepositsAndGamesActivity(project, userId, dateFrom, dateTo, 'slots', currency)
  // newCashbackResponse.allActivityAmount = await getReoprtDepositsAndGamesActivity(project, userId, dateFrom, dateTo, 'all_except', currency)
  // newCashbackResponse.LiveActivityAmount = await getReoprtDepositsAndGamesActivity(project, userId, dateFrom, dateTo, 'live', currency)
  // newCashbackResponse.bonusesIssueAmount = await getBonusesAndFsAmount(project, accountId, dateFrom, dateTo, 'BonusIssue', currency)
  // newCashbackResponse.fsIssueAmount = await getBonusesAndFsAmount(project, accountId, dateFrom, dateTo, 'FreespinIssue', currency)
  // newCashbackResponse.cashbackAmount = Math.min(newCashbackResponse.slotActivityAmount, newCashbackResponse.allActivityAmount) - (newCashbackResponse.bonusesIssueAmount + newCashbackResponse.fsIssueAmount)
  // newCashbackResponse.liveCashbackAmount = Math.floor((newCashbackResponse.LiveActivityAmount - (newCashbackResponse.bonusesIssueAmount + newCashbackResponse.fsIssueAmount)) * 0.05 / 10)

  // if (isContain(project, projectsDynamicCash)) {
  //   newCashbackResponse.percentage = getPercentage(newCashbackResponse.cashbackAmount, currency)
  //   if (newCashbackResponse.cashbackAmount < cashbackDynamic[currency][0]) {
  //     newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в слот-играх не превышает сумму выигрышей более чем на ${cashbackDynamic[currency][0]} ${currencyNames[currency]} за расчетный период.`
  //     newCashbackResponse.availalbe = false
  //   } 
  //   if (newCashbackResponse.cashbackAmount >= cashbackDynamic[currency][0]) {
  //     newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
  //     newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currency]} за расчетный период.`
  //     newCashbackResponse.availalbe = true
  //   }
  // }


  // if (!isContain(project, projectsDynamicCash)) {
  //   newCashbackResponse.percentage = 0.1
  //   if (newCashbackResponse.cashbackAmount < cashbackPermament[currency]) {
  //     newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в слот-играх не превышает сумму выигрышей более чем на ${cashbackPermament[currency]} ${currencyNames[currency]} за расчетный период.`
  //     newCashbackResponse.availalbe = false
  //   }
  //   if (newCashbackResponse.cashbackAmount >= cashbackPermament[currency]) {
  //     newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
  //     newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currency]} за расчетный период.`
  //     newCashbackResponse.availalbe = true
  //   }
  // }

  // if (project == "rox") {
  //   newCashbackResponse.percentage = 0.1
  //   if (newCashbackResponse.cashbackAmount < cashbackPermament[currency]) {
  //     newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в слот-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
  //     newCashbackResponse.availalbe = false
  //   }
  //   if (newCashbackResponse.cashbackAmount >= cashbackPermament[currency]) {
  //     newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
  //     newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currency]} за расчетный период.`
  //     newCashbackResponse.availalbe = true
  //   }
  // }

  // if (newCashbackResponse.cashbackAmount < 0) {
  //   newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма выигрышей превышает сумму ставок, сделанных вами на реальные денежные средства в слот-играх за расчетный период.`
  //   newCashbackResponse.availalbe = false
  // }
  // if (newCashbackResponse.cashbackAmount == 0) {
  //   newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку вы не совершали ставок в слот-играх за расчетный период.`
  //   newCashbackResponse.availalbe = false
  // }
  return newCashbackResponse
}



function checkDepositBonus (hold, status) {
  let bonus = {
    dep: {
      name: '',
      text: '',
      availalbe: true
    },
    ins: {
      name: '',
      text: '',
      availalbe: false
    },
    wager: '',
    depperc: '',
    insperc: ''
  }

  function checkHold(hold, low, high){
    if (hold >= low && hold <= high) return true
    else return false
  }

  function checkPercent(hold, depositBonus){
    if (hold < 0) {
      depositBonus.dep.name = 'ОТРИЦАТЕЛЬНЫЙ ХОЛД'
      depositBonus.ins.text = 'ОТРИЦАТЕЛЬНЫЙ ХОЛД'
    }
    if (checkHold(hold, 0, 20)){
      depositBonus.dep.name = 'PERSONAL BONUS 50%'
      depositBonus.ins.text = 'MIN'
      depositBonus.depperc = '50%'
    }
    if (checkHold(hold, 21, 34)){
      depositBonus.dep.name = 'PERSONAL BONUS 35%, PERSONAL BONUS 50%'
      depositBonus.ins.text = 'MID'
      depositBonus.depperc = '35% либо 50%'
    }
    if (checkHold(hold, 35, 100)){
      depositBonus.dep.name = 'PERSONAL BONUS 25%, PERSONAL BONUS 35%, PERSONAL BONUS 50%'
      depositBonus.ins.text = 'MAX'
      depositBonus.depperc = '25%, 35% либо 50%'
    }
    return depositBonus
  }
 
  switch (status) {
    case 'Premium A':
    case 'Premium B':
    case 'ELITE':
      checkPercent(hold, bonus)
      bonus.wager = 40
      break;
    case 'D-segment':
    case 'C-segment':
      checkPercent(hold, bonus)
      bonus.wager = 35
      break;
    case 'B-segment':
      checkPercent(hold, bonus)
      bonus.wager = 30
      bonus.ins.availalbe = true
      if (bonus.ins.text == 'MIN') {
        bonus.ins.name = 'INSURANCE BONUS A 15%'
        bonus.insperc = '15%'
      }
      if (bonus.ins.text == 'MID') {
        bonus.ins.name = 'INSURANCE BONUS A 15%, INSURANCE BONUS B 25%'
        bonus.insperc = '15% или 25%'
      }
      if (bonus.ins.text == 'MAX') {
        bonus.ins.name = 'INSURANCE BONUS A 15%, INSURANCE BONUS B 25%, INSURANCE BONUS C 35%'
        bonus.insperc = '15%, 25% или 35%'
      }
      break;
    case 'A-segment':
    case 'SUPREME':
      checkPercent(hold, bonus)
      bonus.wager = 30
      bonus.ins.availalbe = true
      if (bonus.ins.text == 'MIN') {
        bonus.ins.name = 'INSURANCE BONUS A 25%'
        bonus.insperc = '25%'
      }
      if (bonus.ins.text == 'MID') {
        bonus.ins.name = 'INSURANCE BONUS A 25%, INSURANCE BONUS B 35%'
        bonus.insperc = '25% или 35%'
      } 
      if (bonus.ins.text == 'MAX') {
        bonus.ins.name = 'INSURANCE BONUS A 25%, INSURANCE BONUS B 35%, INSURANCE BONUS C 50%'
        bonus.insperc = '25%, 35% или 50%'
      }
      break;
    default:
      break;
  }
  // console.log(bonus)
  return bonus
}

function getPointsFirstDate (project, datesobj) {
  
  function pad(value) {
    if (value < 10) 
    return '0' + value
    else return value
  }

  let currDate = new Date(Date.now())
  let minDate = new Date(currDate.valueOf() - datesobj[project].min)
  let maxDate = new Date(currDate.valueOf() - datesobj[project].max)

  // console.log(`FROM MIN DATE: ${minDate.getFullYear()}-${pad(minDate.getMonth() + 1)}-${pad(minDate.getDate())}`)
  // console.log(`FROM MAX DATE: ${maxDate.getFullYear()}-${pad(maxDate.getMonth() + 1)}-${pad(maxDate.getDate())}`)

  let dates = {
    min: `${minDate.getFullYear()}-${pad(minDate.getMonth() + 1)}-${pad(minDate.getDate())}`,
    max: `${maxDate.getFullYear()}-${pad(maxDate.getMonth() + 1)}-${pad(maxDate.getDate())}`
  }

  return dates
}





// --------------- Adding CSS styles
let dynamicStyles = null

function addCSS(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style')
    document.head.appendChild(dynamicStyles)
  }
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length)
}

addCSS(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`)
addCSS(`
.loader {
  margin-left: 45%;
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;
}
`)
addCSS(`
.no_bonus {
  text-align: center;
  cursor: pointer;
  background-color: rgb(250, 227, 227);
}
`)
addCSS(`
.yes_bonus {
  text-align: center;
  cursor: pointer;
  background-color: rgb(171, 196, 178);
}
`)
addCSS(`
#cashback_checking_section td {
  padding: 5px 0px 5px 0px;
  width: 50%;
}
`)
addCSS(`
#livecashback_checking_section td {
  padding: 5px 0px 5px 0px;
  width: 50%;
}
`)
addCSS(`
.circle {
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
  margin: 6px 0px 0px 8px;
}
`)
addCSS(`.range {
	position: relative;
	padding: 0 0.9375rem;
}`)

addCSS(`input[type=range] {
	-webkit-appearance: none;
	display: inline;
	width: 100%;
	height: 5px;
	padding: 0;
	border-radius: 4px;
	background: grey;
	box-sizing: content-box;
}`)
addCSS(`input[type=range]:focus {
  outline: none;
}`)
addCSS(`input[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 10px;
	height: 15px;
	border: 1px solid #A7A7A7;
	border-radius: 25px;
	background: black;
}`)

 let loaderDiv = document.createElement('div')
 let loaderDivCashback = document.createElement('div')
 let loaderDivMotivationBD = document.createElement('div')
 let loaderDivPoints = document.createElement('div')
 let loaderDivLiveCb = document.createElement('div')
 let loaderDivPersonalDep = document.createElement('div')
 let loaderDivSportBonus = document.createElement('div')
 let loaderBirthdayDep = document.createElement('div')
loaderDiv.classList.add('loader')
loaderDivCashback.classList.add('loader')
loaderDivMotivationBD.classList.add('loader')
loaderDivPoints.classList.add('loader')
loaderDivLiveCb.classList.add('loader')
loaderDivPersonalDep.classList.add('loader')
loaderDivSportBonus.classList.add('loader')
loaderBirthdayDep.classList.add('loader')
//----------

  //Getting User Id


  console.log(`USER_ID: ${localStorage.getItem('curruserid')}`)

function getPercentage(amount, currency) {
  if (amount >= cashbackDynamic[currency][16]) return 0.20
  if (amount >= cashbackDynamic[currency][15]) return 0.19
  if (amount >= cashbackDynamic[currency][14]) return 0.18
  if (amount >= cashbackDynamic[currency][13]) return 0.17
  if (amount >= cashbackDynamic[currency][12]) return 0.16
  if (amount >= cashbackDynamic[currency][11]) return 0.15
  if (amount >= cashbackDynamic[currency][10]) return 0.14
  if (amount >= cashbackDynamic[currency][9]) return 0.13
  if (amount >= cashbackDynamic[currency][8]) return 0.12
  if (amount >= cashbackDynamic[currency][7]) return 0.11
  if (amount >= cashbackDynamic[currency][6]) return 0.10
  if (amount >= cashbackDynamic[currency][5]) return 0.09
  if (amount >= cashbackDynamic[currency][4]) return 0.08
  if (amount >= cashbackDynamic[currency][3]) return 0.07
  if (amount >= cashbackDynamic[currency][2]) return 0.06
  if (amount >= cashbackDynamic[currency][1]) return 0.05
  if (amount >= cashbackDynamic[currency][0]) return 0.04
  else return false
}

async function getCashbackDates(project) {
  // if (project == '1go') project == 'go'  
  function pad(value) {
    if (value < 10) 
    return '0' + value
    else return value
  }
  
  let cashbackDays = {
    rox: 0,
    jet: 0,
    volna: 0,
    sol: 432000000,
    legzo: 432000000, 
    drip: 432000000, 
    izzi: 345600000,
    monro: 345600000,
    fresh: 259200000,
    starda: 259200000,
	irwin: 259200000,
	  lex: 518400000,
    gizbo: 518400000,
    "1go": 518400000
  }
  week = [518400000, 0, 86400000, 172800000, 259200000, 345600000, 432000000]
  currenDate = new Date(Date.now())
  let monday = new Date(currenDate.valueOf() - week[currenDate.getDay()])
  let fromDay = new Date(monday.valueOf() - cashbackDays[project])
  let toDay = new Date(fromDay.valueOf() + 518400000)
  let toDayGames = new Date(fromDay.valueOf() + 604800000)


  if (toDay < currenDate) {
    toDay.setDate(toDay.getDate() + 7)
    fromDay.setDate(fromDay.getDate() + 7)
  }

  if (fromDay.getDate() == currenDate.getDate()) {
    toDay.setDate(toDay.getDate() - 7)
    fromDay.setDate(fromDay.getDate() - 7)
  }

  let cashbackDates = {
    from: `${fromDay.getFullYear()}-${pad(fromDay.getMonth() + 1)}-${pad(fromDay.getDate())}`,
    to: `${toDay.getFullYear()}-${pad(toDay.getMonth() + 1)}-${pad(toDay.getDate())}`,
    // toGames: `${toDayGames.getFullYear()}-${pad(toDayGames.getMonth() + 1)}-${pad(toDayGames.getDate())}`
  }
  // console.log(cashbackDates)
  return cashbackDates
}

async function getReportPlayers(project,dateFrom, dateTo, currency, userMail){
  let reportPlayersURL = `https://admin.crimson.${project}.prd.maxbit.private/admin/players_reports?q[created_at_gteq]=${dateFrom}&q[created_at_lteq]=${dateTo}&q[currency_eq]=${currency}&q[user_email_eq]=${userMail}&commit=%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C`
  if (typeof dateTo === 'undefined') reportPlayersURL = `https://admin.crimson.${project}.prd.maxbit.private/admin/players_reports?q[created_at_gteq]=${dateFrom}&q[currency_eq]=${currency}&q[user_email_eq]=${userMail}&commit=%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C`
  let response = await fetch(reportPlayersURL, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
   }
  })
  let data = await response.text()
  let reportPlayersData = {}
  let reportPlayersTable = new window.DOMParser().parseFromString(data, 'text/html')
  if (reportPlayersTable.body.innerText.includes('Players Reports не найдено')) {
    reportPlayersData.depAmount = 0
    reportPlayersData.payoutAmount = 0
    reportPlayersData.diff = 0
  } else {
    reportPlayersData.depAmount = parseFloat(reportPlayersTable.querySelector('td.col-summa_depozitov').innerText.replaceAll(',','.')).toFixed(2)
    reportPlayersData.payoutAmount = parseFloat(reportPlayersTable.querySelector('td.col-summa_vyplat').innerText.replaceAll(',','.')).toFixed(2)
    reportPlayersData.diff = (reportPlayersData.depAmount - reportPlayersData.payoutAmount).toFixed(2)
    reportPlayersData.depCount = parseFloat(reportPlayersTable.querySelector('#index_table_players_reports td.col-kolichestvo_depozitov').innerText)
  }
  console.log(reportPlayersURL)
  return reportPlayersData
}

async function getReportGames(project, fromDay, toDay, currency, mail, category){
  let reportGamesUrl
  if (category == 'live' && project == 'starda') category = 'live_casino'
  if (category == 'live' && project == 'drip') category = 'casino_live'
  if (category == 'live' && project == 'lex') category = 'live_casino_online'
  if (category == 'slots' && project == 'lex') category = 'slots_online'
  if (category == 'live' && project == 'monro') category = 'live_casino'
  if (category == 'slots' && project == 'monro') category = 'play_slots'
  if (category == 'live' && project == '1go') category = 'online_live_casino'
  if (category == 'slots' && project == 'gizbo') category = 'online_casino_slots'
  if (category == 'live' && project == 'gizbo') category = 'online_live_casino'
if (category == 'slots' && project == 'irwin') category = 'casino_slots'
  if (category == 'live' && project == 'irwin') category = 'casino_live'
	
  if (category == 'no') reportGamesUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/clients_reports?created_at_gteq=${fromDay}+00:00&created_at_lt=${toDay}+23:59&sum_by=year&group_by[]=user&currency_eq[]=${currency}&user_eq[]=${mail}&commit=Фильтровать`
  else reportGamesUrl = `https://admin.crimson.${project}.prd.maxbit.private/admin/clients_reports?created_at_gteq=${fromDay}+00:00&created_at_lt=${toDay}+23:59&sum_by=year&group_by[]=user&currency_eq[]=${currency}&user_eq[]=${mail}&game_category_eq[]=${category}&commit=Фильтровать`
  let response = await fetch(reportGamesUrl, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
    }
  })
  // console.log(reportGamesUrl)
  let data = await response.text()
  let reportGamesData ={}
  let reportGamesTable = new window.DOMParser().parseFromString(data, 'text/html')
  if (reportGamesTable.body.innerText.includes('Пока нет Clients Reports')){
    reportGamesData.totalProfit = 0
    reportGamesData.bonusPart = 0
    reportGamesData.diff = 0
  } else {
    reportGamesData.totalProfit = parseFloat(reportGamesTable.querySelector('td.col-obschaya_pribyl').innerText.replaceAll(',','.')).toFixed(2)
    reportGamesData.bonusPart = parseFloat(reportGamesTable.querySelector('td.col-bonusnaya_chast_valovoy_pribyli').innerText.replaceAll(',','.')).toFixed(2)
    reportGamesData.diff = (reportGamesData.totalProfit - reportGamesData.bonusPart).toFixed(2)
  }
  // console.log(category, reportGamesData)
  return reportGamesData
}

function parseUTC(str, zone) {
  let date = new Date(str)
  if (zone == 'UTC') date.setHours(date.getHours() - 3)
  else date.setHours(date.getHours() + 3)
  return date
} 


function isContain(str, arr) {
  let res
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      res = true
      break
    }
    else res = false
  }
  return res
}

function isRegExp(str, regExpArr) {
  let res 
  for (let i = 0; i < regExpArr.length; i++ ){
    if(regExpArr[i].test(str)){
      res = true
      break
    }
    else res = false
  }
  return res
}

async function getPaymentsTableInfo(project, mail, lastCashbackDate, lastBonusDate) {
  localStorage.setItem('lastDrawalDate', '2000-01-01 00:00:00')

  let findedDrawal = false
  let difCurr = false
  let paymentTableInfo = {}
  paymentTableInfo.sum = 0
  paymentTableInfo.activityDays = 1
  paymentTableInfo.avgDepAmount = 0
  paymentTableInfo.rejectReason = ''
  paymentTableInfo.wdamount = 0
  if (lastCashbackDate > lastBonusDate) paymentTableInfo.lastDate = lastCashbackDate
  else paymentTableInfo.lastDate = lastBonusDate

  async function getPageData(page) {
    let paymentsURL = 'https://admin.crimson.' + project + '.prd.maxbit.private/admin/payments?q[user_email_eq]=' + mail + '&scope=only_success&page='+page
    let response = await fetch(paymentsURL, {
      headers: {
         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      }
    })
    let data = await response.text()
    if (!data.includes('Payments не найдено')) {
        let paymentTable = new window.DOMParser().parseFromString(data, "text/html")
        let amounts = paymentTable.getElementsByClassName('index_table index')[1].querySelectorAll('tr > td:nth-child(3)')
        let actions = paymentTable.getElementsByClassName('index_table index')[1].querySelectorAll('tr > td:nth-child(5)')
        let finaldate = paymentTable.getElementsByClassName('index_table index')[1].querySelectorAll('tr > td:nth-child(11)')
        paymentTableInfo.currency = amounts[0].innerText.substring(amounts[0].innerText.length - 3)
        // console.log(amounts)
    
        for (i = 0; i <= actions.length - 1; i++) {
          if (paymentTableInfo.currency != amounts[i].innerText.substring(amounts[i].innerText.length - 3)) difCurr = true

          if (!isContain(project, newLoyaltyProject)) {
              if (actions[i].innerText == 'Депозит') {
                if (finaldate[i].innerText >= paymentTableInfo.lastDate) {
                  paymentTableInfo.sum = paymentTableInfo.sum + parseFloat(amounts[i].innerText.replaceAll(/\s/g, '').replaceAll(/,/g,'.'))
                  if ((i != 0) && (finaldate[i-1].innerText.substring(0, 10) != finaldate[i].innerText.substring(0, 10))) paymentTableInfo.activityDays++
                }
            } else {
              localStorage.setItem('lastDrawalDate', finaldate[i].innerText)
              findedDrawal = true
              break
            }
          }

          if (isContain(project, newLoyaltyProject)) {
            if (finaldate[i].innerText >= paymentTableInfo.lastDate) {
              if (actions[i].innerText == 'Депозит') {
                paymentTableInfo.sum = paymentTableInfo.sum + parseFloat(amounts[i].innerText.replaceAll(/\s/g, '').replaceAll(/,/g,'.'))
                if ((i != 0) && (finaldate[i-1].innerText.substring(0, 10) != finaldate[i].innerText.substring(0, 10))) paymentTableInfo.activityDays++
              }
              if (actions[i].innerText == 'Выплата') {
                paymentTableInfo.wdamount = paymentTableInfo.wdamount + parseFloat(amounts[i].innerText.replaceAll(/\s/g, '').replaceAll(/,/g,'.'))
                findedDrawal = true
                if (localStorage.getItem('lastDrawalDate') == '2000-01-01 00:00:00') localStorage.setItem('lastDrawalDate', finaldate[i].innerText)
              }
            }
            if (actions[i].innerText == 'Выплата') {
              findedDrawal = true
              if (localStorage.getItem('lastDrawalDate') == '2000-01-01 00:00:00') localStorage.setItem('lastDrawalDate', finaldate[i].innerText)
            }
          }          
          // if (actions[i].innerText == 'Депозит') {
          //   if (finaldate[i].innerText >= paymentTableInfo.lastDate) {
          //     paymentTableInfo.sum = paymentTableInfo.sum + parseFloat(amounts[i].innerText.replaceAll(/\s/g, '').replaceAll(/,/g,'.'))
          //     if ((i != 0) && (finaldate[i-1].innerText.substring(0, 10) != finaldate[i].innerText.substring(0, 10))) paymentTableInfo.activityDays++
          //   }
          // } else {
          //     localStorage.setItem('lastDrawalDate', finaldate[i].innerText)
          //     findedDrawal = true
          //     break
          // }
        }
      } else findedDrawal = true
    }
    
  let page = 1
  do {
    await getPageData(page)
    page++
  } while (findedDrawal != true)
    
  

  if (lastCashbackDate >= lastBonusDate && lastCashbackDate >= localStorage.getItem('lastDrawalDate')) {
    paymentTableInfo.lastDate = lastCashbackDate
    paymentTableInfo.operationName = 'cashback'
    paymentTableInfo.text = `Сумма депозитов с момента начисления кешбека составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
    if (isRegExp(localStorage.getItem('lastCashbackOrDep'), personalVipBonuses)) paymentTableInfo.text = `Сумма депозитов с момента начисления персонального предложения составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
  } else if (lastBonusDate >= localStorage.getItem('lastDrawalDate')) {
    paymentTableInfo.lastDate = lastBonusDate
    paymentTableInfo.operationName = 'bezdep'
    paymentTableInfo.text = `Сумма депозитов с момента начисления бездепа составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
  } else {
    paymentTableInfo.lastDate = localStorage.getItem('lastDrawalDate')
    paymentTableInfo.operationName = 'withdrawal'
    paymentTableInfo.text = `Сумма депозитов с момента выплаты составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
  }
  
  if (difCurr == true) paymentTableInfo.text = `Депозиты совершались в разных валютах в рамках расчета бонуса. Необходимо посчитать сумму вручную.`
  
  if (localStorage.getItem('lastDrawalDate') == '2000-01-01 00:00:00') localStorage.setItem('lastDrawalDate', 'Игрок не совершал выводов')
  paymentTableInfo.avgDepAmount = (paymentTableInfo.sum - paymentTableInfo.wdamount) / paymentTableInfo.activityDays

  if (isContain(project, newLoyaltyProject)) {
    if (lastCashbackDate >= lastBonusDate) {
      paymentTableInfo.lastDate = lastCashbackDate
      paymentTableInfo.operationName = 'cashback'
      paymentTableInfo.text = `Сумма депозитов с момента начисления кешбека составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
      if (isRegExp(localStorage.getItem('lastCashbackOrDep'), personalVipBonuses)) paymentTableInfo.text = `Сумма депозитов с момента начисления персонального предложения составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
    } else {
      paymentTableInfo.lastDate = lastBonusDate
      paymentTableInfo.operationName = 'bezdep'
      paymentTableInfo.text = `Сумма депозитов с момента начисления бездепа составляет ${paymentTableInfo.sum} ${paymentTableInfo.currency}`
    }
  }
  // console.log(paymentTableInfo)
  return paymentTableInfo
}


async function getBetsTableInfo(project, id, date, bonusIssue) {
  let betsURL = `https://admin.crimson.${project}.prd.maxbit.private/admin/bets?q[account_user_id_eq]=${id}&q[created_at_gteq]=${date}`
  if (bonusIssue !== undefined) betsURL = betsURL + `&q[bonus_issue_id_not_null]=${bonusIssue}` 
  let response = await fetch(betsURL, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    }      
  })
  let data = await response.text()
  let betsTable = new window.DOMParser().parseFromString(data, 'text/html')
  let curr, cnt, bets, avg
  if (betsTable.body.innerText.includes('Bets не найдено')) {
    curr = 'NOPE'
    cnt = 0
    bets = 0
    avg = 0
  } else {
    curr = betsTable.querySelector('#aggregated_data_sidebar_section tbody tr .col').innerText
    cnt = parseFloat(betsTable.querySelector('#aggregated_data_sidebar_section tbody tr .col-cnt').innerText).toFixed(2)
    bets = parseFloat(betsTable.querySelector('#aggregated_data_sidebar_section tbody tr .col-bets').innerText).toFixed(2)
    avg = (bets/cnt).toFixed(2)
  }
  return {
    avg: avg,
    currency: curr,
    bets: bets
  }
}

async function getBonusInfo(project, currency, avg, status) {
  if (currency == 'CAD') currency = 'USD'
  const dbUrl = 'https://script.google.com/macros/s/AKfycbytH2Q_D_xT53KVlYQqI0sjaaI049PIRXuu88xjANT64g-BVSLUiKAHHFxR8v1SJIia/exec?'
  let params = {
    project: project,
    currency: currency,
    avg: avg,
    status: status
  }
  // console.log(params)
  let response = await fetch(dbUrl + new URLSearchParams(params).toString())
  let data = await response.json()
  return data
  // console.log(data)
}

async function getBonusesIssuesPage(project, userid, isVip) {
  localStorage.setItem('lastCashbackDate', '2000-01-01 00:00:00')
  localStorage.setItem('lastCashbackOrDep', 'NO CASHBACK OR DEPBONUS IN LASTS 10')
  let date = parseUTC(new Date(Date.now()),'UTC')
  let monday = parseUTC(new Date(Date.now()),'UTC')
  let nextmonday = parseUTC(new Date(Date.now()),'UTC')
  let week = [6, 0, 1, 2, 3, 4, 5]
  monday.setDate((date.getDate() - week[date.getDay()]))
  monday.setHours(3, 0, 0)
  nextmonday.setTime(monday.getTime() + 604800000)
  let bonusIssueResponse = {
    name: 'No any bonuses',
    date: '2000-01-01 00:00:00',
    vipdepcount: 0,
    monroCount: 0
  }
  let bonusFinded = false
  async function getPageData(page){
    let url = `https://admin.crimson.${project}.prd.maxbit.private/admin/bonus_issues?order=id_desc&q[user_id_eq]=${userid}&scope=all&page=${page}`
    let response = await fetch(url, {
      headers: {
         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      }
    })
    let data = await response.text()
    if (data.includes('Bonus Issues не найдено')) {
      localStorage.setItem('lastCashbackOrDep', 'NO CASHBACK OR DEPBONUS')
      bonusFinded = true
      return bonusIssueResponse
    } else {
      let bonusIssuedTabel = new window.DOMParser().parseFromString(data, 'text/html')
      let names = bonusIssuedTabel.querySelectorAll('#index_table_bonus_issues tbody .col-title')
      let dates = bonusIssuedTabel.querySelectorAll('#index_table_bonus_issues tbody .col-created_at')
      for (i = names.length-1; i >= 0; i--) {
        // if (isContain(project, newLoyaltyProject)) {
        //   if (isRegExp(names[i].innerText, personalBezdeps) || isRegExp(names[i].innerText, bezdeps)) {
        //     bonusIssueResponse.name = names[i].innerText
        //     bonusIssueResponse.date = dates[i].innerText
        //     bonusFinded = true
        //     if (parseUTC(dates[i].innerText).toISOString() >= monday.toISOString() && isRegExp(names[i].innerText, personalBezdeps) && parseUTC(Date.now(), 'UTC') < nextmonday) bonusIssueResponse.monroCount++
        //   }
        // }
        // if (isVip == false) {
        //   if (names[i].innerText.includes('CASHBACK')) {
        //     bonusIssueResponse.name = names[i].innerText
        //     bonusIssueResponse.date = dates[i].innerText
        //     bonusFinded = true
        //   }
        // }
        // if (isVip == true) {
          if(isRegExp(names[i].innerText, personalVipBonuses) || names[i].innerText.includes('CASHBACK') || isRegExp(names[i].innerText, newPersonalBezdeps)) {
            bonusIssueResponse.name = names[i].innerText
            bonusIssueResponse.date = dates[i].innerText
            bonusFinded = true
            if (parseUTC(dates[i].innerText).toISOString() >= monday.toISOString() && isRegExp(names[i].innerText, personalVipBonuses) && parseUTC(Date.now(), 'UTC') < nextmonday) {
              bonusIssueResponse.vipdepcount++
            }
            if (parseUTC(dates[i].innerText).toISOString() >= monday.toISOString() && isRegExp(names[i].innerText, newPersonalBezdeps) && parseUTC(Date.now(), 'UTC') < nextmonday) {
              bonusIssueResponse.monroCount++
            }
          }
        // }
      }
    }
  }
  let page = 1
  do {
    await getPageData(page)
    page++
  } while (bonusFinded == false)
  // console.log(bonusIssueResponse)
  localStorage.setItem('lastCashbackDate', bonusIssueResponse.date)
  localStorage.setItem('lastCashbackOrDep', bonusIssueResponse.name)
  console.log(bonusIssueResponse)
  return bonusIssueResponse
}

async function getFsIssuedPage(project, user) {
  localStorage.setItem('lastBezdepDate', '2000-01-01 00:00:00')
  localStorage.setItem('lastBezdepName', 'NO BEZDEPS IN LASTS 10')
  let date = parseUTC(new Date(Date.now()),'UTC')
  let monday = parseUTC(new Date(Date.now()),'UTC')
  let nextmonday = parseUTC(new Date(Date.now()),'UTC')
  let week = [6, 0, 1, 2, 3, 4, 5]
  monday.setDate((date.getDate() - week[date.getDay()]))
  monday.setHours(3, 0, 0)
  nextmonday.setTime(monday.getTime() + 604800000)
  let fsIssuePageResponse = {
    bezdepCount: 0,
    name: 'No any bonuses',
    date: '2000-01-01 00:00:00'
  }
  let fsFinded
  async function getPageData(page) {
    fsFinded = false
    let url = `https://admin.crimson.${project}.prd.maxbit.private/admin/freespin_issues?order=id_desc&q[user_id_eq]=${user}&scope=all&page=${page}`
    let response = await fetch(url, {
      headers: {
         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      }
    })
    let data = await response.text()
    if (data.includes('Freespin Issues не найдено')){
      fsFinded = true
      return fsIssuePageResponse
    } else {
      let fsIssuedTable = new window.DOMParser().parseFromString(data, 'text/html')
      let names = fsIssuedTable.querySelectorAll('#index_table_freespin_issues tbody .col-title')
      let status = fsIssuedTable.querySelectorAll('#index_table_freespin_issues tbody .col-stage')
      let dates = fsIssuedTable.querySelectorAll('#index_table_freespin_issues tbody .col-created_at')
      for (i = names.length-1; i >= 0; i--) {
        if (isRegExp(names[i].innerText, bezdeps) && status[i].innerText != 'Отменен') {
          // console.log(names[i].innerText)
          fsIssuePageResponse.name = names[i].innerText
          fsIssuePageResponse.date = dates[i].innerText
          fsFinded = true
          if (parseUTC(dates[i].innerText).toISOString() >= monday.toISOString() && isRegExp(names[i].innerText, personalBezdeps) && parseUTC(Date.now(), 'UTC') < nextmonday && !isContain(project, newLoyaltyProject)) fsIssuePageResponse.bezdepCount++
          // if (i == 0 && fsFinded == true) fsFinded = false
        }
      }
    }
  }
  let page = 1
  do {
    await getPageData(page)
    page++
  } while (fsFinded == false)
  // console.log(fsIssuePageResponse)
  localStorage.setItem('lastBezdepDate', fsIssuePageResponse.date)
  localStorage.setItem('lastBezdepName', fsIssuePageResponse.name)
  return fsIssuePageResponse
}

function inRange(numb, begin, end) {
  if (numb >= begin && numb < end) return true
  else return false
}

async function getLoyaltyCardPlayerInfo(project, userId, currency) {
  let url = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/player_cards/${userId}/loyalty_casino?currency=${currency}&locale=ru`
  let response = await fetch(url)
  let loyalJson = await response.json()
  let loyalCardResponse = {}
  loyalCardResponse.casinoNGR_6 = loyalJson.loyalty_casino.table_data[1].ngr_casino.cents * 0.01
  loyalCardResponse.stressRTC_6 = Number(loyalJson.loyalty_casino.table_data[1].q_bonus_per_ggr_percentage.toFixed(2))
  loyalCardResponse.loyaltyAmount_6 = loyalJson.loyalty_casino.table_data[1].loyalty_bonus.cents * 0.01
  loyalCardResponse.maxLoyaltyBonusSum = loyalJson.loyalty_casino.max_loyalty_bonus_amount.cents * 0.01
  loyalCardResponse.wager = loyalJson.loyalty_casino.recommended_loyalty_bonus_wager
  loyalCardResponse.stressRTCzones = loyalJson.loyalty_casino.q_stress_rtc_zones
  loyalCardResponse.stressRTC_30 = Number(loyalJson.loyalty_casino.table_data[2].q_bonus_per_ggr_percentage.toFixed(2))

  for (let prop in loyalCardResponse.stressRTCzones) {
    if (inRange(loyalCardResponse.stressRTC_6, loyalCardResponse.stressRTCzones[prop][0], loyalCardResponse.stressRTCzones[prop][1])) {
      loyalCardResponse.zoneColor = prop
      break
    } else loyalCardResponse.zoneColor = 'red'
  }
  return loyalCardResponse
}
async function getMarketingCardPlayerInfo(project, userId, currency) {
  let url = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/player_cards/${userId}/marketing?currency=${currency}&locale=ru`;
  let response = await fetch(url);
  let marketingJson = await response.json();
  let marketingCardResponse = {};
  marketingCardResponse.qbetdep = Number(marketingJson.player_marketing[2].q_bet_dep.toFixed(2));
  marketingCardResponse.rtc = Number(marketingJson.player_marketing[2].rtc.toFixed(2));
  marketingCardResponse.Vdrope = Number(marketingJson.player_marketing[2].q_bonuses.toFixed(2));


  return marketingCardResponse;
}

//---------------------------User Main Page----------------------------------------------

if (/players\/\d+/g.test(window.location.href)) {
  //setting default local param
  localStorage.setItem('lastCashbackDate', '2000-01-01 00:00:00')
  localStorage.setItem('lastCashbackOrDep', 'NO CASHBACK OR DEPBONUS IN LASTS 10')
  localStorage.setItem('lastBezdepDate', '2000-01-01 00:00:00')
  localStorage.setItem('lastBezdepName', 'NO BEZDEPS IN LASTS 10') 
  
  

  userid = window.location.href.split('/')[5]
  localStorage.setItem('curruserid', userid)

  userFirstName = document.querySelector('tr.row-first_name td').innerText


  let bonusAvailable, bezdepCount = 0
  

  //Gettin user email
  let userProject = window.location.href.split('.')[2]
  let cashbackProject = window.location.href.split('.')[2] 
  let userMail = document.querySelector('#email_sidebar_section .panel_contents').innerText  
  //Checking the availability of the bonus
  let date = parseUTC(new Date(Date.now()), 'UTC')
  let monday = new Date
  let nextmonday = new Date
  let week = [6, 0, 1, 2, 3, 4, 5]
  monday.setDate((date.getDate() - week[date.getDay()]))
  monday.setHours(3, 0, 0)
  nextmonday.setTime(monday.getTime() + 604800000)

  document.querySelector('#page_title').onclick = () => {
    navigator.clipboard.writeText(`${document.querySelector('#page_title').firstChild.textContent}\n${window.location.href}`)
  }
  document.querySelector('#page_title').style.textDecoration = 'underline'
  // document.querySelector('#page_title').style.cursor = 'pointer'
  // --------------------------------
  // getBonusesIssuesPage(userProject, userid, true)
   //Cheking index for tables 

  let index = 0
  if (document.getElementsByTagName('table')[index+2].innerText.includes('ЛИМИТ')) index++


  let bonusWeek = document.createElement('div')
  let bonusTable = document.querySelectorAll('.panel')[2]

  let bPremTag = document.createElement('b')
  let agentTag = document.createElement('b')
  let nobonusTag = document.createElement('b')
  let bKfTag = document.createElement('b')
  let plusTag = document.createElement('b')
  let tags = document.querySelectorAll('#priority_groups_sidebar_section .player-tag')
  let tags_other = document.querySelectorAll('#other_groups_sidebar_section .player-tag')
  let topTags = document.querySelectorAll('#other_groups_sidebar_section .player-tag')
  
  let accounts = document.getElementsByTagName('table')[0]
  let accountsCurrIdList = document.querySelectorAll('.col-id')
  let curr = accounts.querySelectorAll('.col-valyuta')
  let koef = accounts.querySelectorAll('.col-bonusov_kazino')
  let holdAll = accounts.querySelectorAll('.col-hold')
  let result = accounts.querySelectorAll('.col-rezultat')
  let depAll = accounts.querySelectorAll('.col-depozity')
  let withAll = accounts.querySelectorAll('.col-vyplaty')
  let depositAll, payoutAll
  for (i=0; i <= curr.length - 1; i++) {
    if (curr[i].innerHTML.includes('status_tag  yes') && /\d+/.test(accountsCurrIdList[i].innerText)) {
      currCashback = curr[i].innerText
      accountCurrId = parseFloat(accountsCurrIdList[i].innerText)
      console.log(accountCurrId)
      kfBonus = parseFloat(koef[i].innerText)
      hold = parseFloat(holdAll[i].innerText)
      diffAllTime = parseFloat(result[i].innerText.replaceAll(/\s/g,'').replaceAll(',','.'))
      if (result[i].innerHTML.includes('status_tag red')) {
        result[i].style.textDecoration = 'underline'
        result[i].style.cursor = 'pointer'
        result[i].onclick = () => {
          navigator.clipboard.writeText(`${userFirstName}, не могу предложить вам бездепозитный бонус, так как у вас сумма выплат превышает сумму депозитов на нашем сайте.`)
        }
        document.getElementById('page_title').appendChild(plusTag)
        plusTag.style.color = 'red'
        plusTag.innerText = ' [ПЛЮСОВОЙ] '
      }
      depositAll = depAll[i].innerText
      payoutAll = withAll[i].innerText
    }
  }
  document.querySelector('#main_content .panel h3').style.textDecoration = 'underline'
  document.querySelector('#main_content .panel h3').style.cursor = 'pointer'
  document.querySelector('#main_content .panel h3').onclick = () => {
    navigator.clipboard.writeText(`Сумма депозитов за всё время активности на сайте составляет ${depositAll.slice(0,-7)} ${currencyNames[currCashback]}, а сумма выплат - ${payoutAll.slice(0,-7)} ${currencyNames[currCashback]}.`)
  }

  //checking agent tags
  let forAgentTags = document.querySelectorAll('#tags_sidebar_section .current-tags span')
  let agentTagStr = ''
  forAgentTags.forEach((el) => {
    if (el.getAttribute('style') == 'background-color: #000000') agentTagStr += el.innerText
  })
  if (agentTagStr != '') agentTag.innerText = ` [${agentTagStr}]`
  agentTag.style.color = 'black'

  document.getElementById('page_title').appendChild(bPremTag)
  document.getElementById('page_title').appendChild(bKfTag)
  document.getElementById('page_title').appendChild(nobonusTag)
  document.getElementById('page_title').appendChild(agentTag)
  status_tag = 'NO PMS'


  for (i=0; i <= tags.length-1; i++) {
    if (tags[i].innerText.includes('no_bonus')) nobonusTag.innerText = ` [no_bonus]`
    if (tags[i].innerText.includes('VIP СЕГМЕНТ')) status_tag = `VIP СЕГМЕНТ`
  }

  for (i=0; i <= tags_other.length-1; i++) {
    // if (tags_other[i].innerText.includes('ELITE') && userProject == 'monro') status_tag = 'ELITE'
    // if (tags_other[i].innerText.includes('SUPREME') && userProject == 'monro') status_tag = 'SUPREME'
    // if (tags_other[i].innerText.includes('STEADY') && userProject == '1go') status_tag = 'STEADY'
    // if (tags_other[i].innerText.includes('GO') && userProject == '1go') status_tag = 'GO'
    // if (tags_other[i].innerText.includes('Premium A')) status_tag = 'Premium A'
    // if (tags_other[i].innerText.includes('Premium B')) status_tag = 'Premium B'
    // if (tags_other[i].innerText.includes('D-segment')) status_tag = 'D-segment'
    // if (tags_other[i].innerText.includes('C-segment')) status_tag = 'C-segment'
    // if (tags_other[i].innerText.includes('B-segment')) status_tag = 'B-segment'
    // if (tags_other[i].innerText.includes('A-segment')) status_tag = 'A-segment'
    if (tags_other[i].innerText.includes('no_bonus')) nobonusTag.innerText = ` [no_bonus]`
    if (tags_other[i].innerText.includes('VIP СЕГМЕНТ')) status_tag = `VIP СЕГМЕНТ`
    // console.log(status_tag)
  }


  if (document.querySelector('#tags_sidebar_section').innerText.includes('no_bonus')) nobonusTag.innerText = ` [no_bonus]`


  // tags_other.forEach((el) => {
  //   if (isContain(el.innerText, statusesALL)) {
  //     status_tag = el.innerText.slice(7)
  //     console.log(el.innerText.slice(7))
  //   } 
  // })
  tags.forEach((el) => {
    if (isContain(el.innerText, statusesALL)) {
      status_tag = el.innerText.slice(7)
      console.log(el.innerText.slice(7))
    }
  })

  for (i=0; i <= tags.length-1; i++) {
    if (tags[i].innerText.includes('no_bonus')) nobonusTag.innerText = ` [no_bonus]`
  }
  if (document.querySelector('#tags_sidebar_section').innerText.includes('VIP СЕГМЕНТ')) status_tag = status_tag + `VIP СЕГМЕНТ`

  

  if ((isContain(status_tag, statusesALL) || status_tag.includes('VIP СЕГМЕНТ')) && isContain(userProject, newLoyaltyProject)) {
    isVip = true
    bPremTag.innerText = `[${status_tag}]`
    bPremTag.style.color = 'orange'
  } else {
    bPremTag.innerText = ` [NO PMS]`
    bPremTag.style.color = 'red'
  }
  if (isContain(status_tag, statuses) && !isContain(userProject, newLoyaltyProject)) {
    isVip = true
    bPremTag.innerText = ` [${status_tag}]`
    bPremTag.style.color = 'blue'
  } else if (isContain(status_tag, statusesVIP) && !isContain(userProject, newLoyaltyProject)) {
    isVip = true
    bPremTag.innerText = ` [VIP] [${status_tag}]`
    bPremTag.style.color = 'orange'
  }
  if (status_tag == 'NO PMS') {
    bPremTag.innerText = ` [NO PMS]`
    bPremTag.style.color = 'red'
  }
  console.log('TAG: ' + status_tag)
// let bonusPageInfo, fsPageInfo
// async function getInfo() {
//   bonusPageInfo = await getBonusesIssuesPage(userProject, userid, isVip)
//   fsPageInfo = await getFsIssuedPage(userProject, userid)
//   console.log(bonusPageInfo, fsPageInfo)
//   bezdepCount = fsPageInfo.bezdepCount
// }
// getInfo()
  
// checkSportBonus(userid, userProject, currCashback)


  //-Adding CASHBACK date links and settin LocalStorage cahback date-

  let cashbackTable = document.getElementsByTagName('table')[index+2]
  let cashbackDates = cashbackTable.querySelectorAll('.col-vydaetsya_na')
  let cashbackNames = cashbackTable.querySelectorAll('.col-id')
  for (i = cashbackTable.rows.length - 1; i >= 1; i--) {
    cashbackDates[i].innerHTML = '<a href="https://' + window.location.href.split('/')[2] + '/admin/bets?q[account_user_id_eq]=' + localStorage.getItem('curruserid') + '&q[created_at_gteq]=' + cashbackDates[i].innerText + '" target="_blank">' + cashbackDates[i].innerText + '</a>'
    // if (cashbackNames[i].firstChild.innerText.includes('CASHBACK')){
    //   isVip = false
    //   localStorage.setItem('lastCashbackOrDep', cashbackNames[i].innerText)
    //   localStorage.setItem('lastCashbackDate', cashbackDates[i].innerText)
    //   localStorage.setItem('lastCashbackLink', cashbackDates[i].innerHTML)
    // }
    // if (isRegExp(cashbackNames[i].innerText, personalVipBonuses)){
    //   isVip = true
    //   localStorage.setItem('lastCashbackOrDep', cashbackNames[i].innerText)
    //   localStorage.setItem('lastCashbackDate', cashbackDates[i].innerText)
    //   localStorage.setItem('lastCashbackLink', cashbackDates[i].innerHTML)
    // }
  }

  //---Checkting prsonals bonuses for VIP
  
  // if (isVip == true) {
  //   for (i = cashbackTable.rows.length - 1; i >= 1; i--) {
  //     if (isRegExp(cashbackNames[i].firstChild.innerText, personalVipBonuses) || cashbackNames[i].innerText.includes('CASHBACK')){
  //       localStorage.setItem('lastCashbackOrDep', cashbackNames[i].innerText)
  //       localStorage.setItem('lastCashbackDate', cashbackDates[i].innerText)
  //       localStorage.setItem('lastCashbackLink', cashbackDates[i].innerHTML)
  //     }
  //   }
  // }

  //-Adding BEZDEP date links and settin LocalStorage cahback date-

  let bezdepTable = document.getElementsByTagName('table')[index+3]
  let bezdepDates = bezdepTable.querySelectorAll('.col-vydaetsya_na')
  let bezdepNames = bezdepTable.querySelectorAll('.col-id')
  let bezdepStatus = bezdepTable.querySelectorAll('.col-sostoyanie')
  for (i = bezdepTable.rows.length - 1; i >= 1; i--){
    bezdepDates[i].innerHTML = '<a href="https://' + window.location.href.split('/')[2] + '/admin/bets?q[account_user_id_eq]=' + localStorage.getItem('curruserid') + '&q[created_at_gteq]=' + bezdepDates[i].innerText + '" target="_blank">' + bezdepDates[i].innerText + '</a>'
    // if (isRegExp(bezdepNames[i].firstChild.innerText, bezdeps) && bezdepStatus[i].innerText != 'Отменен') {
    //   localStorage.setItem('lastBezdepName', bezdepNames[i].innerText)
    //   localStorage.setItem('lastBezdepDate', bezdepDates[i].innerText)
    //   dateTemp = new Date(bezdepDates[i].innerText)
    //   localStorage.setItem('lastBezdepLink', bezdepDates[i].innerHTML)
    //   if (parseUTC(bezdepDates[i].innerText).toISOString() >= monday.toISOString() && isRegExp(bezdepNames[i].firstChild.innerText, personalBezdeps) && Date.now() < nextmonday) bezdepCount++
    // }
  }
  //-Highlight withdrawal comments-

  let withdrawalTable = document.getElementsByTagName('table')[index+7]
  let withdrawalComments = withdrawalTable.querySelectorAll('.col-kommentarii')
  let withdrawalStatus = withdrawalTable.querySelectorAll('.col-uspeshno')
  let withdrawalActions = withdrawalTable.querySelectorAll('.col-deystvie')
  for (i = 1; i <= withdrawalComments.length - 1; i++) {
    if (withdrawalStatus[i].innerText == 'В ОБРАБОТКЕ') {
      
      withdrawalStatus[i].onclick = () => {
        navigator.clipboard.writeText(`С нашей стороны средства были направлены вам, ${userFirstName}. Ожидайте, пожалуйста. В настоящее время они находятся в обработке на стороне платёжной системы.`)
      }
      withdrawalStatus[i].style.cursor = 'pointer'
      withdrawalStatus[i].style.textDecoration = 'underline'
    }
    if (withdrawalStatus[i].innerText == 'ОЖИДАЕТ' && withdrawalActions[i].innerText == 'Cashout') {
      withdrawalStatus[i].onclick = () => {
        navigator.clipboard.writeText(`Уже отправил выплату на ускорение, ${userFirstName}`)
    }
      withdrawalStatus[i].style.cursor = 'pointer'
      withdrawalStatus[i].style.textDecoration = 'underline'
    }
    if (withdrawalStatus[i].innerText == 'ОЖИДАЕТ' && withdrawalActions[i].innerText == 'Deposit') {
      withdrawalStatus[i].onclick = () => {
        navigator.clipboard.writeText(`Сейчас наблюдаются задержки на стороне платёжной системы, ${userFirstName}. Если в течение 15 минут средства не поступят на ваш игровой баланс, напишите нам снова. Создадим запрос в платёжную систему.`)
    }
      withdrawalStatus[i].style.cursor = 'pointer'
      withdrawalStatus[i].style.textDecoration = 'underline'
    }
    if (withdrawalStatus[i].innerText == 'НЕТ' && withdrawalActions[i].innerText == 'Cashout') {
      withdrawalStatus[i].onclick = () => {
        navigator.clipboard.writeText(`${userFirstName}, отказ поступил со стороны платежной системы. Сформируйте, пожалуйста, новую заявку на вывод.`)
    }
      withdrawalStatus[i].style.cursor = 'pointer'
      withdrawalStatus[i].style.textDecoration = 'underline'
    } 
    if (withdrawalComments[i].innerText != '0') 
      withdrawalComments[i].parentNode.childNodes.forEach(node => {
        node.style = 'background-color: #f7caca;'
      })
  }

  // //Checking for personal bonus a week on OLD project


  
  // if (depCount > 0) {
  //   bonusWeek.innerHTML = '<h3>BONUS ALREADY USED ' + depCount + ' TIMES ON THIS WEEK from ' + monday.toLocaleString('ru', {month: 'long', day: 'numeric'}) + '</h3>'
  //   bonusAvailable = false
  //   bonusWeek.style.backgroundColor = 'indianred'
  //   bonusWeek.style.cursor = 'pointer'
  //   let str = dateTemp.toLocaleString('ru', {month: 'long', day: 'numeric'})
  //   bonusWeek.onclick = () => {
  //     navigator.clipboard.writeText('Спасибо за ожидание. Я проверил информацию по вашему аккаунту. Вижу, что ' + str + ' вам был зачислен персональный бонус, в связи с чем не смогу порадовать вас его активацией на текущий момент. Повторно вы сможете запросить расчет в предстоящий понедельник после 03:00 по МСК, мы с радостью произведем зачисление индивидуального бонуса при его доступности!')
  //   }
  // } else {
  //   bonusWeek.innerHTML = '<h3>BONUS AVALIEBLE from ' + monday.toLocaleString('ru', {month: 'long', day: 'numeric'}) + '</h3>'
  //   bonusAvailable = true
  //   bonusWeek.style.backgroundColor = 'darkseagreen'
  // }
  // bonusTable.before(bonusWeek)
  // bonusWeek.style.color = 'black'
  // bonusWeek.style.padding = '5px'
  // bonusWeek.style.border = 'solid 1px darkgrey'
  // bonusWeek.style.borderRadius = '3px'
  // bonusWeek.style.boxShadow = '0 2px 3px rgb(0 0 0 / 25%), 0 0 1px #fff inset'

  // bonusWeek.querySelector('h3').style.margin = '0'
  // bonusWeek.querySelector('h3').style.color = 'black'


  //PREMIUM SEGMENT TAGS and Cheking bonus for current week


 // Checking deposit wagering
 let depWagerTable = document.getElementById('deposit_turnover_sidebar_section')
 depWagerTable.style.cursor = 'pointer'
 if (depWagerTable.querySelector('td').innerText == 'ОТЫГРАН') {
   depWagerTable.style.border = '3px dashed green'
   depWagerTable.style.cursor = 'pointer'
   depWagerTable.onclick = () => {
     navigator.clipboard.writeText(`${userFirstName}, условие отыгрыша последнего внесенного депозита выполнено.`)
   }

 } else {
   depWagerTable.style.border = '2px dashed red'
   depWagerTable.onclick = () => {
     navigator.clipboard.writeText(`${userFirstName}, для вывода средств вам необходимо совершить ставок на сумму ` + parseFloat(depWagerTable.querySelector('td').innerText) + 
     ' ' + minAmountOld[depWagerTable.querySelector('th').innerText].name)
   }
 }// ---------------

//------------Checking for personal bonus
let tableBonusInfo, tableBonusName = 'NO BONUS'
let divBezdepChecking = document.createElement('div')
divBezdepChecking.id = 'bezdep_checking_section'
divBezdepChecking.classList.add('sidebar_section', 'panel')
divBezdepChecking.insertAdjacentHTML('afterbegin', '<h3>Checking for personal bonus</h3>')

let divPanelContent = document.createElement('div')
divPanelContent.className = 'panel_contents'
divBezdepChecking.append(divPanelContent)

let divAttributesTable = document.createElement('div')
divAttributesTable.className = 'attributes_table'
divPanelContent.append(divAttributesTable)
divPanelContent.append(loaderDiv)

let tableBezdep = document.createElement('table')
divAttributesTable.append(tableBezdep)

let tableHead = document.createElement('thead')
tableBezdep.append(tableHead)
let tableBody = document.createElement('tbody')


tableBezdep.append(tableBody)



getBonusesIssuesPage(userProject, userid, isVip).then((bonusesIssue) => {
  // console.log(bonusesIssue)
  if (bonusesIssue.monroCount >= newSegmentBonusCount[status_tag]) {
    console.log('STATUS COUNT: ' + newSegmentBonusCount[status_tag])
    bonusWeek.innerHTML = '<h3>BONUS ALREADY USED ' + bonusesIssue.monroCount + ' TIMES ON THIS WEEK from ' + monday.toLocaleString('ru', {month: 'long', day: 'numeric'}) + '</h3>'
    bonusAvailable = false
    bonusWeek.style.backgroundColor = 'indianred'
    bonusWeek.onclick = () => {
      navigator.clipboard.writeText(`${userFirstName}, вам были зачислены ${newSegmentBonusCount[status_tag]} части персонального бонуса на этой календарной неделе, в связи с чем не смогу порадовать вас его активацией. Повторно вы сможете запросить расчет в предстоящий понедельник после 03:00 по МСК, мы с радостью произведем зачисление индивидуального бонуса при его доступности!`)
    }
  } else {
    bonusWeek.innerHTML = `<h3>BONUS AVALIEBLE from ${monday.toLocaleString('ru', {month: 'long', day: 'numeric'})} (${bonusesIssue.monroCount} of ${newSegmentBonusCount[status_tag]})</h3>`
    bonusAvailable = true
    bonusWeek.style.backgroundColor = 'darkseagreen'
  }
  
  getFsIssuedPage(userProject, userid).then((fsIssuedInfo) => {

    // if (isContain(status_tag, twoWeekTags) || isContain(userProject, newLoyaltyProject)) {
    //   // console.log('2 times per week', fsIssuedInfo.bezdepCount)
    //   if (fsIssuedInfo.bezdepCount + bonusesIssue.monroCount >= newSegmentBonusCount[status_tag]) {
    //     bonusWeek.innerHTML = '<h3>BONUS ALREADY USED ' + `${fsIssuedInfo.bezdepCount + bonusesIssue.monroCount}` + ' TIMES ON THIS WEEK from ' + monday.toLocaleString('ru', {month: 'long', day: 'numeric'}) + '</h3>'
    //     bonusAvailable = false
    //     bonusWeek.style.backgroundColor = 'indianred'
    //     bonusWeek.onclick = () => {
    //       navigator.clipboard.writeText(`${userFirstName}, вам были зачислены 2 части персонального бонуса на этой календарной неделе, в связи с чем не смогу порадовать вас его активацией. Повторно вы сможете запросить расчет в предстоящий понедельник после 03:00 по МСК, мы с радостью произведем зачисление индивидуального бонуса при его доступности!`)
    //     }
    //   } else {
    //     bonusWeek.innerHTML = `<h3>BONUS AVALIEBLE from ${monday.toLocaleString('ru', {month: 'long', day: 'numeric'})} (${fsIssuedInfo.bezdepCount + bonusesIssue.monroCount} of 2)</h3>`
    //     bonusAvailable = true
    //     bonusWeek.style.backgroundColor = 'darkseagreen'
    //   }
    // } else if (isContain(status_tag, oneWeekTags) || !isContain(userProject, newLoyaltyProject)) {
    //   // console.log('1 times per week', fsIssuedInfo.bezdepCount)
    //   if (fsIssuedInfo.bezdepCount + bonusesIssue.monroCount >= 1) {
    //     bonusWeek.innerHTML = '<h3>BONUS ALREADY USED ' + `${fsIssuedInfo.bezdepCount + bonusesIssue.monroCount}` + ' TIMES ON THIS WEEK from ' + monday.toLocaleString('ru', {month: 'long', day: 'numeric'}) + '</h3>'
    //     bonusAvailable = false
    //     bonusWeek.style.backgroundColor = 'indianred'
    //     dateTemp = new Date(fsIssuedInfo.date)
    //     let str = dateTemp.toLocaleString('ru', {month: 'long', day: 'numeric'})
    //     bonusWeek.onclick = () => {
    //       navigator.clipboard.writeText(`${userFirstName}, ${str} вам был зачислен персональный бонус, в связи с чем не смогу порадовать вас его активацией на текущий момент. Повторно вы сможете запросить расчет в предстоящий понедельник после 03:00 по МСК, мы с радостью произведем зачисление индивидуального бонуса при его доступности!`)
    //     }
    //   } else {
    //     bonusWeek.innerHTML = `<h3>BONUS AVALIEBLE from ${monday.toLocaleString('ru', {month: 'long', day: 'numeric'})} (${fsIssuedInfo.bezdepCount + bonusesIssue.monroCount} of 1)</h3>`
    //     bonusAvailable = true
    //     bonusWeek.style.backgroundColor = 'darkseagreen'
    //   }
    // }

    if (fsIssuedInfo.bezdepCount + bonusesIssue.monroCount >= newSegmentBonusCount[status_tag]) {
      bonusWeek.innerHTML = '<h3>BONUS ALREADY USED ' + `${fsIssuedInfo.bezdepCount + bonusesIssue.monroCount}` + ' TIMES ON THIS WEEK from ' + monday.toLocaleString('ru', {month: 'long', day: 'numeric'}) + '</h3>'
      bonusAvailable = false
      bonusWeek.style.backgroundColor = 'indianred'
      bonusWeek.onclick = () => {
        navigator.clipboard.writeText(`${userFirstName}, вам были зачислены ${newSegmentBonusCount[status_tag]} части персонального бонуса на этой календарной неделе, в связи с чем не смогу порадовать вас его активацией. Повторно вы сможете запросить расчет в предстоящий понедельник после 03:00 по МСК, мы с радостью произведем зачисление индивидуального бонуса при его доступности!`)
      }
    } else {
      bonusWeek.innerHTML = `<h3>BONUS AVALIEBLE from ${monday.toLocaleString('ru', {month: 'long', day: 'numeric'})} (${fsIssuedInfo.bezdepCount + bonusesIssue.monroCount} of ${newSegmentBonusCount[status_tag]})</h3>`
      bonusAvailable = true
      bonusWeek.style.backgroundColor = 'darkseagreen'
    }

    bonusTable.before(bonusWeek)
    if (kfBonus > 25) {
      bKfTag.innerText = ` [NO BONUS ${kfBonus}%]`
      bKfTag.style.color = 'red'
      bonusAvailable = false
    } else {
      bKfTag.innerText = ` [BONUS HOLD ${kfBonus}%]`
      bKfTag.style.color = 'green'
    }
    if (diffAllTime < 0) bonusAvailable = false
  
    bonusWeek.style.color = 'black'
    bonusWeek.style.padding = '5px'
    bonusWeek.style.border = 'solid 1px darkgrey'
    bonusWeek.style.borderRadius = '3px'
    bonusWeek.style.boxShadow = '0 2px 3px rgb(0 0 0 / 25%), 0 0 1px #fff inset'
  
    bonusWeek.querySelector('h3').style.margin = '0'
    bonusWeek.querySelector('h3').style.color = 'black'

    getPaymentsTableInfo(userProject, userMail, localStorage.getItem('lastCashbackDate'), localStorage.getItem('lastBezdepDate'))
.then((paymentTableInfo) => {
  
  tableBody.insertRow().innerHTML = `<th>${localStorage.getItem('lastCashbackOrDep')}</th>`
  tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = localStorage.getItem('lastCashbackDate')

  tableBody.insertRow().innerHTML = `<th>${localStorage.getItem('lastBezdepName')}</th>`
  tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = localStorage.getItem('lastBezdepDate')

  tableBody.insertRow().innerHTML = `<th>Последний вывод</th>`
  tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = localStorage.getItem('lastDrawalDate')
  

  tableBody.insertRow().insertCell().innerText = paymentTableInfo.text
    tableBody.rows[tableBody.rows.length - 1].cells[0].colSpan = 2
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.textAlign = 'center'

  if ((minAmountSegment[paymentTableInfo.currency].amount/2) <= paymentTableInfo.sum) depBonusAvail = true
  else depBonusAvail = false
  if (diffAllTime <= 0) depBonusAvail = false
        // //------------------------------Cheking personal deposit bonus
        // let divPersonalDep = document.createElement('div')
        // divPersonalDep.id = 'personaldepbonus_checking_section'
        // divPersonalDep.classList.add('sidebar_section', 'panel', 'collapsible')
        // divPersonalDep.insertAdjacentHTML('afterbegin', '<h3>Checking for personal deposit bonus</h3>')

        // let divPanelContentPersonalDep = document.createElement('div')
        // divPanelContentPersonalDep.className = 'panel_contents'
        // divPanelContentPersonalDep.style.display = 'none'
        // divPersonalDep.append(divPanelContentPersonalDep)
        // divPersonalDep.firstElementChild.onclick = () => {
        //   if (divPersonalDep.firstElementChild.classList.contains('expanded')) {
        //     divPersonalDep.firstElementChild.classList.remove('expanded')
        //     divPanelContentPersonalDep.style.display = 'none'
        //   } else {
        //     divPersonalDep.firstElementChild.classList.add('expanded')
        //     divPanelContentPersonalDep.style.removeProperty('display')
        //   }
        // }
        // let divAttributesTablePersonalDep = document.createElement('div')
        // divAttributesTablePersonalDep.className = 'attributes_table'
        // divPanelContentPersonalDep.append(divAttributesTablePersonalDep)
        // divPanelContentPersonalDep.append(loaderDivPersonalDep)

        // let tablePersonalDep = document.createElement('table')
        // divAttributesTablePersonalDep.append(tablePersonalDep)

        // let tableHeadPersonalDep = document.createElement('thead')
        // tablePersonalDep.append(tableHeadPersonalDep)

        // let tableBodyPersonalDep = document.createElement('tbody')

        // tablePersonalDep.append(tableBodyPersonalDep)
        //   if (depBonusAvail == true) {
        //     let personalDepBonus = checkDepositBonus(hold, status_tag)
        //     if (bonusesIssue.vipdepcount != 0 && status_tag != 'A-segment'){
        //       tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'БОНУС НЕДОСТУПЕН НА ЭТОЙ НЕДЕЛЕ'
        //       // tableBodyPersonalDep.rows[0].cells[0].colSpan = 2
        //       tableBodyPersonalDep.rows[0].cells[0].classList.add('no_bonus')
        //       tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'Сейчас могу вам предложить депозитный бонус, поскольку вы уже получали его на этой неделе.'
        //     }
        //     if (bonusesIssue.vipdepcount == 0) {
        //       if (personalDepBonus.dep.availalbe == true) {
        //         let lists = personalDepBonus.dep.name.split(',')
        //         for (i=0; i<=lists.length - 1; i++){
        //           tableBodyPersonalDep.insertRow().insertCell().innerHTML = lists[i]
        //           tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].colSpan = 2
        //           tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].classList.add('yes_bonus')
        //         }
        //         tableBodyPersonalDep.insertRow().insertCell().innerHTML = `Сейчас могу вам предложить депозитный бонус в размере ${personalDepBonus.depperc}. Вейджер на бонусы составит ${personalDepBonus.wager}, а максимальный выигрыш не ограничен. Подскажите, пожалуйста, какое предложение для вас актуально?`
        //       }
        //       if (personalDepBonus.ins.availalbe == true) {
        //         let lists = personalDepBonus.ins.name.split(',')
        //         for (i=0; i<=lists.length - 1; i++){
        //           tableBodyPersonalDep.insertRow().insertCell().innerHTML = lists[i]
        //           tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].colSpan = 2
        //           tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].classList.add('yes_bonus')
        //         }
        //         tableBodyPersonalDep.insertRow().insertCell().innerHTML = `Сейчас могу вам предложить депозитный бонус в размере ${personalDepBonus.depperc} или бонус-страховку в размере ${personalDepBonus.insperc}. Вейджер на бонусы составит ${personalDepBonus.wager}, а максимальный выигрыш не ограничен. Подскажите, пожалуйста, какое предложение для вас актуально?`
        //       }
        //     }
        //   } else {
        //     tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'БОНУС НЕДОСТУПЕН ПО СУММЕ ДЕПА'
        //     // tableBodyPersonalDep.rows[0].cells[0].colSpan = 2
        //     tableBodyPersonalDep.rows[0].cells[0].classList.add('no_bonus')
        //   }
        //   document.querySelector('#sidebar').prepend(divPersonalDep) 
        //   loaderDivPersonalDep.remove()


    if ((paymentTableInfo.sum == 0) && !isContain(userProject, newLoyaltyProject)) {
    if (isContain(window.location.href, projectsSegments)) {
      switch (paymentTableInfo.operationName) {
        case 'bezdep' :
          tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения последнего бездепозитного предложения. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          break
        case 'cashback':
          if (isVip == true && localStorage.getItem('lastCashbackOrDep').includes('%')) tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения персонального депозитного предложения. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения кешбека. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          break
        case 'withdrawal':
          tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после выплаты. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          break
      }
      addInfoToTable()
    } else if (isContain(window.location.href, projectsOld) && !isContain(userProject, newLoyaltyProject)) {
      switch (paymentTableInfo.operationName) {
        case 'bezdep' :
          tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения последнего бездепозитного предложения. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          break
        case 'cashback':
          if (isVip == true && localStorage.getItem('lastCashbackOrDep').includes('%')) tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения персонального депозитного предложения. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения кешбека. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          break
        case 'withdrawal':
          tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после выплаты. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
          break
        }
        addInfoToTable()
    }
  } else if (isContain(window.location.href, projectsSegments) && paymentTableInfo.sum < minAmountSegment[paymentTableInfo.currency].amount && !isContain(userProject, newLoyaltyProject)) {
        switch (paymentTableInfo.operationName) {
          case 'bezdep' :
            tableBonusInfo = `${userFirstName}, пока что не могу предложить вам бездепозитный бонус, так как после зачисления последнего персонального предложения вы не внесли депозитов на сумму ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            paymentTableInfo.rejectReason = 'bezdep'
            break
          case 'cashback':
            if ((isVip == true && localStorage.getItem('lastCashbackOrDep').includes('%')) || !localStorage.getItem('lastCashbackOrDep').includes('CASHBACK')) tableBonusInfo = `${userFirstName}, пока что персональный бездепозитный бонус вам недоступен, потому что после получения персонального предложения вы не внесли депозитов на сумму ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            tableBonusInfo = `${userFirstName}, пока что персональный бездепозитный бонус вам недоступен, потому что после получения кешбека вы не внесли депозитов на сумму ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            paymentTableInfo.rejectReason = 'cashback'
            break
          case 'withdrawal':
            tableBonusInfo = `${userFirstName}, пока что персональный бездепозитный бонус вам недоступен, потому что после вывода денежных средств вы не внесли депозитов на сумму ${minAmountSegment[paymentTableInfo.currency].amount} ${minAmountSegment[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            paymentTableInfo.rejectReason = 'withdrawal'
            break
        }
        addInfoToTable()
      } else if (isContain(window.location.href, projectsOld) && paymentTableInfo.sum < minAmountOld[paymentTableInfo.currency].amount && !isContain(userProject, newLoyaltyProject)) {
        switch (paymentTableInfo.operationName) {
          case 'bezdep' :
            tableBonusInfo = `${userFirstName}, пока что не могу предложить вам бездепозитный бонус, так как после зачисления последнего персонального предложения вы не внесли депозитов на сумму ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            break
          case 'cashback':
            if ((isVip == true && localStorage.getItem('lastCashbackOrDep').includes('%')) || !localStorage.getItem('lastCashbackOrDep').includes('CASHBACK')) tableBonusInfo = `${userFirstName}, пока что персональный бездепозитный бонус вам недоступен, потому что после получения перслнального депозитного предложения вы не внесли депозитов на сумму ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            tableBonusInfo = `${userFirstName}, пока что персональный бездепозитный бонус вам недоступен, потому что после получения кешбека вы не внесли депозитов на сумму ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            break
          case 'withdrawal':
            tableBonusInfo = `${userFirstName}, пока что персональный бездепозитный бонус вам недоступен, потому что после вывода денежных средств вы не внесли депозитов на сумму ${minAmountOld[paymentTableInfo.currency].amount} ${minAmountOld[paymentTableInfo.currency].name}. Сейчас сумма ваших пополнений - ${paymentTableInfo.sum} ${minAmountOld[paymentTableInfo.currency].name}. Вам напомнить остальные условия получения бонуса?`
            break
        }
        addInfoToTable()
      } else {
      getBetsTableInfo(userProject, userid, paymentTableInfo.lastDate)
      .then((betsTableInfo) => {

        tableBody.insertRow().innerHTML = `<th>AVG</th>`
        tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = betsTableInfo.avg + ' ' + betsTableInfo.currency 

        if ((!isContain(userProject, newLoyaltyProject))) {
            getBonusInfo(userProject, betsTableInfo.currency, betsTableInfo.avg, status_tag)
          .then((infoBonus) => {
            tableBonusInfo = `${userFirstName}, ${infoBonus.bonusInfo}`
            tableBonusName = infoBonus.bonusName
            // console.log(infoBonus)
            addInfoToTable()
          })
        } else {
          // tableBonusInfo = 'MONRO INFO'
          // tableBonusName = 'MONRO NAME'
          // addInfoToTable()
        }
      })
  }

  if (isContain(userProject, newLoyaltyProject, hold)) {
      getLoyaltyCardPlayerInfo(userProject, userid, currCashback).then((responseCaerdLoyalty) => {
        tableBody.innerHTML = ``
        tableBody.insertRow().innerHTML = `<th style="width: 100%;">NGR Casino 6+</th>`
        tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = responseCaerdLoyalty.casinoNGR_6
        tableBody.insertRow().innerHTML = `<th>Q stress 6+</th>`
        tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = responseCaerdLoyalty.stressRTC_6
        tableBody.insertRow().innerHTML = `<th>Wager</th>`
        tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = responseCaerdLoyalty.wager
        tableBody.insertRow().innerHTML = `<td colspan=2 style="text-align: center;">
        <div class="slider">
        <div class="range">
          <span class="status_tag" style="color: black; font-size: 1em;">5</span>
          <input type="range" name="date" id="slider" min="2" max="10" step="1" value="5">
        </div>
        </div>
        </td>`
        tableBody.insertRow().innerHTML = `<th>Max amount</th>`
        tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = responseCaerdLoyalty.maxLoyaltyBonusSum
        tableBody.insertRow().innerHTML = `<th>LOYALTY BONUS Amount</th>`
        tableBody.rows[tableBody.rows.length - 1].insertCell().innerHTML = `<td><span class="status_tag" style="background-color: ${responseCaerdLoyalty.zoneColor}; color: black; font-size: 1em;">` + ((responseCaerdLoyalty.casinoNGR_6 * (document.querySelector('#slider').value * 0.01) - responseCaerdLoyalty.loyaltyAmount_6)).toFixed(1) + `</span></td>`
        if (parseFloat(tableBody.rows[5].cells[1].innerText) <= 0) tableBody.rows[5].cells[1].innerHTML = `<td><span class="status_tag" style="background-color: ${responseCaerdLoyalty.zoneColor}; color: black; font-size: 1em;"> 0 </span></td>`

        if (parseFloat(tableBody.rows[5].cells[1].innerText) < newLoyalInfoCurrAmount[currCashback].min) {
          tableBody.rows[5].cells[1].innerHTML = `<td><span class="status_tag" style="background-color: ${responseCaerdLoyalty.zoneColor}; color: black; font-size: 1em;"> 0 </span></td>`
          bonusAvailable = false
          tableBonusInfo = `В данный момент я не могу предложить вам персональный бонус, ${userFirstName}. Вы можете продолжить ваш игровой процесс и связаться с нами позднее для проверки возможности зачисления персонального бонуса.` 
          
        } else {
          bonusAvailable = true
          tableBonusName = `LOYALTY BONUS`
          tableBonusInfo = `${userFirstName}, вам доступен бонус в размере ${Math.round(responseCaerdLoyalty.casinoNGR_6 * 0.05)} ${currencyNames[currCashback]}. Вейджер на бонус составит ${responseCaerdLoyalty.wager}, а максимальный выигрыш не ограничен.  Скажите, пожалуйста, мне начислить вам данный бонус? ` 
        }

        document.querySelector('#slider').oninput = () => {
          document.querySelector('.range span').innerText = document.querySelector('#slider').value
          tableBody.rows[5].cells[1].innerHTML = `<td><span class="status_tag" style="background-color: ${responseCaerdLoyalty.zoneColor}; color: black; font-size: 1em;">` + ((responseCaerdLoyalty.casinoNGR_6 * (document.querySelector('#slider').value * 0.01) - responseCaerdLoyalty.loyaltyAmount_6)).toFixed(1) + `</span></td>`
          if (parseFloat(tableBody.rows[5].cells[1].innerText) <= 0 || parseFloat(tableBody.rows[5].cells[1].innerText) < newLoyalInfoCurrAmount[currCashback].min) {
            tableBody.rows[5].cells[1].innerHTML = `<td><span class="status_tag" style="background-color: ${responseCaerdLoyalty.zoneColor}; color: black; font-size: 1em;"> 0 </span></td>`
          }
          if (parseFloat(tableBody.rows[5].cells[1].innerText) < newLoyalInfoCurrAmount[currCashback].min) {
            tableBody.rows[5].cells[1].innerHTML = `<td><span class="status_tag" style="background-color: ${responseCaerdLoyalty.zoneColor}; color: black; font-size: 1em;"> 0 </span></td>`
            bonusAvailable = false
            tableBonusInfo = `К сожалению, вашей игровой активности недостаточно для получения бонуса, ${userFirstName}.` 
          } else {
            bonusAvailable = true
            tableBonusName = `LOYALTY BONUS`
            tableBonusInfo = `${userFirstName}, вам доступен бонус в размере ${Math.round(parseFloat(tableBody.rows[5].cells[1].innerText) * (1 / newLoyalInfoCurrAmount[currCashback].round)) * newLoyalInfoCurrAmount[currCashback].round} ${currencyNames[currCashback]}.`  
          }
        }
        addInfoToTable()
      })
//     tableBody.insertRow().innerHTML = `<th>Dep Amount</th>`
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = paymentTableInfo.sum
//     tableBody.insertRow().innerHTML = `<th>Payout Amount</th>`
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = paymentTableInfo.wdamount
//     if (paymentTableInfo.sum - paymentTableInfo.wdamount < 0) {
//       tableBody.insertRow().innerHTML = `<th>Clean Amount</th>`
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerHTML = `<span style="color: black; font-size: 1em" class="status_tag red">${paymentTableInfo.sum - paymentTableInfo.wdamount}</span>`
//     } else {
//       tableBody.insertRow().innerHTML = `<th>Clean Amount</th>`
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerHTML = `<span style="color: black; font-size: 1em" class="status_tag green">${paymentTableInfo.sum - paymentTableInfo.wdamount}</span>`
//     }
    
//     tableBody.insertRow().innerHTML = `<th>Days Activity</th>`
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = paymentTableInfo.activityDays
//     tableBody.insertRow().innerHTML = `<th>Daily AVG</th>`
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = Math.round(paymentTableInfo.avgDepAmount)
//     tableBody.insertRow().innerHTML = `<th>Back Amount</th>` 
//     tableBody.rows[tableBody.rows.length - 1].insertCell().innerText = `${paymentTableInfo.avgDepAmount * 0.05} ${paymentTableInfo.currency}, minimal ${newLoyalInfoCurrAmount[paymentTableInfo.currency].min} ${paymentTableInfo.currency}`
//     if (paymentTableInfo.sum == 0) {
//       switch (paymentTableInfo.operationName) {
//         case 'bezdep' :
//           tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения последнего бездепозитного предложения.`
//           break
//         case 'cashback':
//           tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения кешбека.`
//           if ((isVip == true && localStorage.getItem('lastCashbackOrDep').includes('%')) || !localStorage.getItem('lastCashbackOrDep').includes('CASHBACK')) tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения персонального предложения.`
//           break
//         case 'withdrawal':
//           tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после выплаты.`
//           break
//       }
//     } else if (paymentTableInfo.avgDepAmount * 0.05 >= newLoyalInfoCurrAmount[paymentTableInfo.currency].min) {
      
//       tableBonusInfo =`${userFirstName}, вам доступен бонус в размере ${(Math.round((paymentTableInfo.avgDepAmount * 0.05) * (1 / newLoyalInfoCurrAmount[paymentTableInfo.currency].round))) * newLoyalInfoCurrAmount[paymentTableInfo.currency].round} ${minAmountOld[paymentTableInfo.currency].name}. Вейджер на бонус - 35. Максимальная сумма выигрыша неограничена. Начислить его вам?`
//       tableBonusName = 'Loyalty Bonus'

//     } else if (paymentTableInfo.avgDepAmount * 0.05 < newLoyalInfoCurrAmount[paymentTableInfo.currency].min) {
// tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус. Вы можете проявить еще немного игровой активности и обратиться за начислением позднее.`
//     } else if (paymentTableInfo.sum - paymentTableInfo.wdamount < 0) {
//       switch (paymentTableInfo.operationName) {
//         case 'bezdep' :
//           tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как сумма выплат превышает сумму пополнений после получения последнего бездепозитного предложения.`
//           break
//         case 'cashback':
//           tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как сумма выплат превышает сумму пополнений после получения кешбека.`
//           if ((isVip == true && localStorage.getItem('lastCashbackOrDep').includes('%')) || !localStorage.getItem('lastCashbackOrDep').includes('CASHBACK')) tableBonusInfo = `${userFirstName}, на данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения персонального предложения.`
//           break
// }
//     }
    addInfoToTable()
  }



function addInfoToTable () {
  if (bonusAvailable == true) {
    tableBody.insertRow().insertCell().innerText = tableBonusName
    tableBody.rows[tableBody.rows.length - 1].cells[0].colSpan = 2
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.textAlign = 'center'
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.cursor = 'pointer'
    if (tableBonusName == 'NO BONUS') tableBody.rows[tableBody.rows.length - 1].cells[0].style.backgroundColor = '#fae3e3'
    else tableBody.rows[tableBody.rows.length - 1].cells[0].style.backgroundColor = '#abc4b2'
    tableBody.rows[tableBody.rows.length - 1].cells[0].onclick = () => {
      navigator.clipboard.writeText(tableBonusName)
    }
  
    tableBody.insertRow().insertCell().innerText = tableBonusInfo
    tableBody.rows[tableBody.rows.length - 1].cells[0].colSpan = 2
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.textAlign = 'center'
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.cursor = 'pointer'
    tableBody.rows[tableBody.rows.length - 1].cells[0].onclick = () => {
      navigator.clipboard.writeText(tableBonusInfo)
    }
  } else {
    tableBody.insertRow().insertCell().innerText = 'НЕ ДОСТУПЕН'
    
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.backgroundColor = '#fae3e3'
    tableBody.rows[tableBody.rows.length - 1].cells[0].colSpan = 2
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.textAlign = 'center'
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.cursor = 'pointer'
    tableBody.rows[tableBody.rows.length - 1].cells[0].onclick = bonusWeek.onclick

    if (kfBonus > 25) {
      tableBody.rows[tableBody.rows.length - 1].cells[0].innerText = `ПРОЦЕНТ ВЫДАЧИ ${kfBonus}%`
      tableBody.rows[tableBody.rows.length - 1].cells[0].onclick = () => {
        navigator.clipboard.writeText(`${userFirstName}, на текущий момент предложить бонус не могу, так как вы часто используете депозитные и бездепозитные бонусы на нашем сайте. Чтобы мы могли вас чаще радовать персональными предложениями, проявляйте, пожалуйста, игровую активность, совершая ставки на реальные средства.`)
      }
    }
    if (diffAllTime < 0) {
      tableBody.rows[tableBody.rows.length - 1].cells[0].innerText = `ПЛЮСОВОЙ`
      tableBody.rows[tableBody.rows.length - 1].cells[0].onclick = () => {
        navigator.clipboard.writeText(`${userFirstName}, не могу предложить вам бездепозитный бонус, так как у вас сумма выплат превышает сумму депозитов на нашем сайте.`)
      }
    }
    tableBody.insertRow().insertCell().innerText = tableBonusInfo
    tableBody.rows[tableBody.rows.length - 1].cells[0].colSpan = 2
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.textAlign = 'center'
    tableBody.rows[tableBody.rows.length - 1].cells[0].style.cursor = 'pointer'
    tableBody.rows[tableBody.rows.length - 1].cells[0].onclick = () => {
      navigator.clipboard.writeText(tableBonusInfo)
    }
  }
  loaderDiv.remove()
} 


          //------------------------------Cheking personal deposit bonus
          let divPersonalDep = document.createElement('div')
          divPersonalDep.id = 'personaldepbonus_checking_section'
          divPersonalDep.classList.add('sidebar_section', 'panel', 'collapsible')
          divPersonalDep.insertAdjacentHTML('afterbegin', '<h3>Checking for personal deposit bonus</h3>')
  
          let divPanelContentPersonalDep = document.createElement('div')
          divPanelContentPersonalDep.className = 'panel_contents'
          divPanelContentPersonalDep.style.display = 'none'
          divPersonalDep.append(divPanelContentPersonalDep)
          divPersonalDep.firstElementChild.onclick = () => {
            if (divPersonalDep.firstElementChild.classList.contains('expanded')) {
              divPersonalDep.firstElementChild.classList.remove('expanded')
              divPanelContentPersonalDep.style.display = 'none'
            } else {
              divPersonalDep.firstElementChild.classList.add('expanded')
              divPanelContentPersonalDep.style.removeProperty('display')
            }
          }
          let divAttributesTablePersonalDep = document.createElement('div')
          divAttributesTablePersonalDep.className = 'attributes_table'
          divPanelContentPersonalDep.append(divAttributesTablePersonalDep)
          divPanelContentPersonalDep.append(loaderDivPersonalDep)
  
          let tablePersonalDep = document.createElement('table')
          divAttributesTablePersonalDep.append(tablePersonalDep)
  
          let tableHeadPersonalDep = document.createElement('thead')
          tablePersonalDep.append(tableHeadPersonalDep)
  
          let tableBodyPersonalDep = document.createElement('tbody')
  
          tablePersonalDep.append(tableBodyPersonalDep)
            if (depBonusAvail == true) {
              let personalDepBonus = checkDepositBonus(hold, status_tag)
              if (bonusesIssue.vipdepcount != 0 && status_tag != 'A-segment'){
                tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'БОНУС НЕДОСТУПЕН НА ЭТОЙ НЕДЕЛЕ'
                // tableBodyPersonalDep.rows[0].cells[0].colSpan = 2
                tableBodyPersonalDep.rows[0].cells[0].classList.add('no_bonus')
                tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'Сейчас не могу вам предложить персональный депозитный бонус, поскольку вы уже получали его на этой неделе.'
                tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
                tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.cursor = 'pointer'
              }
              if (bonusesIssue.vipdepcount >= 2 && status_tag == 'A-segment'){
                tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'БОНУС НЕДОСТУПЕН НА ЭТОЙ НЕДЕЛЕ'
                // tableBodyPersonalDep.rows[0].cells[0].colSpan = 2
                tableBodyPersonalDep.rows[0].cells[0].classList.add('no_bonus')
                tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'Сейчас не могу вам предложить персональный депозитный бонус, поскольку вы уже получали его дважды на этой неделе.'
                tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
                tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.cursor = 'pointer'
              }
              if (bonusesIssue.vipdepcount == 0) {
                if (personalDepBonus.dep.availalbe == true) {
                  let lists = personalDepBonus.dep.name.split(',')
                  for (i=0; i<=lists.length - 1; i++){
                    tableBodyPersonalDep.insertRow().insertCell().innerHTML = lists[i]
                    tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].colSpan = 2
                    tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].classList.add('yes_bonus')
                    tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                      navigator.clipboard.writeText(e.target.innerHTML)
                    }
                  } 
                  if (lists.length == 1) tableBodyPersonalDep.insertRow().insertCell().innerHTML = `Сейчас могу вам предложить депозитный бонус в размере ${personalDepBonus.depperc}. Вейджер на бонус составит ${personalDepBonus.wager}, а максимальный выигрыш не ограничен. Подскажите, пожалуйста, для вас актуально это предложение?`
                  else tableBodyPersonalDep.insertRow().insertCell().innerHTML = `Сейчас могу вам предложить депозитный бонус в размере ${personalDepBonus.depperc}. Вейджер на бонусы составит ${personalDepBonus.wager}, а максимальный выигрыш не ограничен. Подскажите, пожалуйста, какое предложение для вас актуально?`
                  tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
                  tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                    navigator.clipboard.writeText(e.target.innerHTML)
                  }
                }
                if (personalDepBonus.ins.availalbe == true) {
                  tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].remove()
                  let lists = personalDepBonus.ins.name.split(',')
                  for (i=0; i<=lists.length - 1; i++){
                    tableBodyPersonalDep.insertRow().insertCell().innerHTML = lists[i]
                    tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].colSpan = 2
                    tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].classList.add('yes_bonus')
                    tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                      navigator.clipboard.writeText(e.target.innerHTML)
                    }
                  }
                  tableBodyPersonalDep.insertRow().insertCell().innerHTML = `Сейчас могу вам предложить депозитный бонус в размере ${personalDepBonus.depperc} или бонус-страховку в размере ${personalDepBonus.insperc}. Вейджер на бонусы составит ${personalDepBonus.wager}, а максимальный выигрыш не ограничен. Подскажите, пожалуйста, какое предложение для вас актуально?`
                  tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
                  tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                    navigator.clipboard.writeText(e.target.innerHTML)
                  }
                }
              }
            } else if (diffAllTime >= 0) {
              tableBodyPersonalDep.insertRow().insertCell().innerHTML = 'БОНУС НЕДОСТУПЕН ПО СУММЕ ДЕПА'
              // tableBodyPersonalDep.rows[0].cells[0].colSpan = 2
              tableBodyPersonalDep.rows[0].cells[0].classList.add('no_bonus')
              switch (paymentTableInfo.rejectReason) {
                case 'bezdep':
                  tableBodyPersonalDep.insertRow().insertCell().innerHTML = `${userFirstName}, не могу предложить вам персональный депозитный бонус, поскольку сумма депозитов с момента начисления бездепозитного бонуса составляет ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount / 2} ${minAmountSegment[paymentTableInfo.currency].name}.`
                  break
                case 'withdrawal':
                  tableBodyPersonalDep.insertRow().insertCell().innerHTML = `${userFirstName}, не могу предложить вам персональный депозитный бонус, поскольку сумма депозитов с момента выплаты составляет ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount / 2} ${minAmountSegment[paymentTableInfo.currency].name}.`
                  break
                case 'cashback':
                  if (isVip == true) tableBodyPersonalDep.insertRow().insertCell().innerHTML = `${userFirstName}, не могу предложить вам персональный депозитный бонус, поскольку сумма депозитов с момента получения персонального депозитного бонуса составляет ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount / 2} ${minAmountSegment[paymentTableInfo.currency].name}.`
                  else tableBodyPersonalDep.insertRow().insertCell().innerHTML = `${userFirstName}, не могу предложить вам персональный депозитный бонус, поскольку сумма депозитов с момента получения кешбека составляет ${paymentTableInfo.sum} ${minAmountSegment[paymentTableInfo.currency].name}. Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount / 2} ${minAmountSegment[paymentTableInfo.currency].name}.`

              } 
              // tableBodyPersonalDep.insertRow().insertCell().innerHTML = `${userFirstName}, не могу предложить вам персональный депозитный бонус, поскольку сумма депозитов с  Напомню, что сумма ваших депозитов должна быть не менее ${minAmountSegment[paymentTableInfo.currency].amount / 2} ${minAmountSegment[paymentTableInfo.currency].name}.`
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.cursor = 'pointer'
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                navigator.clipboard.writeText(e.target.innerHTML)
              }
            } else {
              tableBodyPersonalDep.insertRow().insertCell().innerHTML = `ПЛЮСОВОЙ`
              tableBodyPersonalDep.rows[0].cells[0].classList.add('no_bonus')
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                navigator.clipboard.writeText(e.target.innerHTML)
              }
              tableBodyPersonalDep.insertRow().insertCell().innerHTML = `${userFirstName}, не могу предложить вам персональный депозитный бонус, так как у вас сумма выплат превышает сумму депозитов на нашем сайте.`
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].style.textAlign = 'center'
              tableBodyPersonalDep.rows[tableBodyPersonalDep.rows.length - 1].cells[0].onclick = (e) => {
                navigator.clipboard.writeText(e.target.innerHTML)
              }
            }
            if (!isContain(userProject, newLoyaltyProject)) document.querySelector('#sidebar').prepend(divPersonalDep) 
            loaderDivPersonalDep.remove()
            //--------------------------------END PERSONAK 

})

  })
})

//------------------------------Cheking personal deposit bonus
// let divPersonalDep = document.createElement('div')
// divPersonalDep.id = 'personaldepbonus_checking_section'
// divPersonalDep.classList.add('sidebar_section', 'panel', 'collapsible')
// divPersonalDep.insertAdjacentHTML('afterbegin', '<h3>Checking for personal deposit bonus</h3>')

// let divPanelContentPersonalDep = document.createElement('div')
// divPanelContentPersonalDep.className = 'panel_contents'
// divPanelContentPersonalDep.style.display = 'none'
// divPersonalDep.append(divPanelContentPersonalDep)
// divPersonalDep.firstElementChild.onclick = () => {
//   if (divPersonalDep.firstElementChild.classList.contains('expanded')) {
//     divPersonalDep.firstElementChild.classList.remove('expanded')
//     divPanelContentPersonalDep.style.display = 'none'
//   } else {
//     divPersonalDep.firstElementChild.classList.add('expanded')
//     divPanelContentPersonalDep.style.removeProperty('display')
//   }
// }
// let divAttributesTablePersonalDep = document.createElement('div')
// divAttributesTablePersonalDep.className = 'attributes_table'
// divPanelContentPersonalDep.append(divAttributesTablePersonalDep)
// divPanelContentPersonalDep.append(loaderDivPersonalDep)

// let tablePersonalDep = document.createElement('table')
// divAttributesTablePersonalDep.append(tablePersonalDep)

// let tableHeadPersonalDep = document.createElement('thead')
// tablePersonalDep.append(tableHeadPersonalDep)

// let tableBodyPersonalDep = document.createElement('tbody')

// tablePersonalDep.append(tableBodyPersonalDep)
//   if (depBonusAvail == true) {
//     let personalDepBonus = checkDepositBonus(hold, status_tag)
//     if (bonusesIssue.vipdepcount != 0 && status_tag != 'A-segment'){
//       tableBodyPersonalDep.insertRow().innerHTML = 'БОНУС НЕДОСТУПЕН НА ЭТОЙ НЕДЕЛЕ'
//     }
//     if (bonusesIssue.vipdepcount == 0) {
//       if (personalDepBonus.dep.availalbe == true) {
//         let lists = personalDepBonus.dep.name.split(',')
//         for (i=0; i<=lists.length - 1; i++){
//           tableBodyPersonalDep.insertRow().innerHTML = lists[i]
//         }
//       }
//       if (personalDepBonus.ins.availalbe == true) {
//         let lists = personalDepBonus.ins.name.split(',')
//         for (i=0; i<=lists.length - 1; i++){
//           tableBodyPersonalDep.insertRow().innerHTML = lists[i]
//         }
//       }
//     }
//   } else tableBodyPersonalDep.insertRow().innerHTML = 'БОНУС НЕДОСТУПЕН ПО СУММЕ ДЕПА'




//-------Cashback Info

let divCashbackCheking = document.createElement('div')
divCashbackCheking.id = 'cashback_checking_section'
divCashbackCheking.classList.add('sidebar_section', 'panel')
divCashbackCheking.insertAdjacentHTML('afterbegin', '<h3>Checking for cashback</h3>')

let divPanelContentCashback = document.createElement('div')
divPanelContentCashback.className = 'panel_contents'
divCashbackCheking.append(divPanelContentCashback)

let divAttributesTableCashback = document.createElement('div')
divAttributesTableCashback.className = 'attributes_table'
divPanelContentCashback.append(divAttributesTableCashback)
divPanelContentCashback.append(loaderDivCashback)

let tableChashback = document.createElement('table')
divAttributesTableCashback.append(tableChashback)

let tableHeadCashback = document.createElement('thead')
tableChashback.append(tableHeadCashback)

let tableBodyCashback = document.createElement('tbody')

tableChashback.append(tableBodyCashback)

getCashbackDates(userProject).then((dates) => {
  tableBodyCashback.insertRow().innerHTML = `<th>Начало периода:</th>`
  tableBodyCashback.rows[0].insertCell().innerText = dates.from
  // tableChashback.rows[0].cells[1].rowSpan = 2

  tableBodyCashback.insertRow().innerHTML = `<th>Конец периода:</th>`
  tableBodyCashback.rows[1].insertCell().innerText = dates.to
  // tableBodyCashback.rows[1].cells[1].rowSpan = 2
    // tableBodyCashback.style.display = 'none'
  tableBodyCashback.style.textAlign = 'center'
  let newCashbackResponse = {
    slotActivityAmount: 0,
    allActivityAmount: 0,
    LiveActivityAmount: 0,
    bonusesIssueAmount: 0,
    fsIssueAmount: 0,
    cashbackAmount: 0,
    script: '',
    finalAmount: 0,
    liveCashbackAmount: 0,
    percentage: 0,
    availalbe: false,
  } 
  tableBodyCashback.insertRow().insertCell().innerText = "0%"
  tableBodyCashback.rows[2].cells[0].colSpan = '2'
  getReportGames(userProject, dates.from, dates.to, currCashback, userMail, 'slots').then((slotReport) => {
    tableBodyCashback.rows[2].cells[0].innerHTML = "25%"
    getReportGames(userProject, dates.from, dates.to, currCashback, userMail, 'no').then((allReport) => {
      tableBodyCashback.rows[2].cells[0].innerHTML = "50%"
      getBonusesAndFsAmount(userProject, accountCurrId, dates.from, dates.to, 'FreespinIssue', currCashback).then((fsIssueAmount)=> {
        tableBodyCashback.rows[2].cells[0].innerHTML = "75%"
        getBonusesAndFsAmount(userProject, accountCurrId, dates.from, dates.to, 'BonusIssue', currCashback).then((bonusesIssueAmount) => {
          let slotActivityAmount = slotReport.totalProfit
          let allActivityAmount = allReport.totalProfit
          tableBodyCashback.deleteRow(2)
          tableBodyCashback.insertRow().innerHTML = `<th style="text-align: center"> Отчет по депозитной и игровой активности </th>`
          tableBodyCashback.rows[2].cells[0].colSpan = '2'
      
          tableBodyCashback.insertRow().insertCell().innerText = `Слоты`
          tableBodyCashback.rows[3].insertCell().innerText = `Все игры`
      
          tableBodyCashback.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${Number(slotActivityAmount).toFixed(2)} ${currCashback}</span>`
          tableBodyCashback.rows[4].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${Number(allActivityAmount).toFixed(2)} ${currCashback}</span>`

          tableBodyCashback.insertRow().innerHTML = `<th style="text-align: center">Суммы начисленных бонусов и фриспинов</th>`
        tableBodyCashback.rows[5].cells[0].colSpan = '2'

        tableBodyCashback.insertRow().insertCell().innerText = `Фриспины`
        tableBodyCashback.rows[6].insertCell().innerText = `Бонусы`
        tableBodyCashback.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${fsIssueAmount.toFixed(2)} ${currCashback}</span>`
          tableBodyCashback.rows[7].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${bonusesIssueAmount.toFixed(2)} ${currCashback}</span>`
          newCashbackResponse.cashbackAmount = Math.min(slotActivityAmount, allActivityAmount) - (bonusesIssueAmount + fsIssueAmount)
          // newCashbackResponse.liveCashbackAmount = Math.floor((newCashbackResponse.LiveActivityAmount - (newCashbackResponse.bonusesIssueAmount + newCashbackResponse.fsIssueAmount)) * 0.05 / 10)

          if (isContain(userProject, projectsDynamicCash)) {
            newCashbackResponse.percentage = getPercentage(newCashbackResponse.cashbackAmount, currCashback)
            if (newCashbackResponse.cashbackAmount < cashbackDynamic[currCashback][0]) {
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в слот-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
              newCashbackResponse.availalbe = false
            } 
            if (newCashbackResponse.cashbackAmount >= cashbackDynamic[currCashback][0]) {
              newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currCashback]} за расчетный период.`
              newCashbackResponse.availalbe = true
            }
          }


          if (!isContain(userProject, projectsDynamicCash)) {
            newCashbackResponse.percentage = 0.1
            if (newCashbackResponse.cashbackAmount < cashbackPermament[currCashback]) {
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в слот-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
              newCashbackResponse.availalbe = false
            }
            if (newCashbackResponse.cashbackAmount >= cashbackPermament[currCashback]) {
              newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currCashback]} за расчетный период.`
              newCashbackResponse.availalbe = true
            }
          }

          if (userProject == "rox") {
            newCashbackResponse.percentage = 0.1
            if (newCashbackResponse.cashbackAmount < cashbackPermament[currCashback]) {
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в слот-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
              newCashbackResponse.availalbe = false
            }
            if (newCashbackResponse.cashbackAmount >= cashbackPermament[currCashback]) {
              newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currCashback]} за расчетный период.`
              newCashbackResponse.availalbe = true
            }
          }

          if (newCashbackResponse.cashbackAmount < 0) {
            newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма выигрышей превышает сумму ставок, сделанных вами на реальные денежные средства в слот-играх за расчетный период.`
            newCashbackResponse.availalbe = false
          }
          if (newCashbackResponse.cashbackAmount == 0) {
            newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку вы не совершали ставок в слот-играх за расчетный период.`
            newCashbackResponse.availalbe = false
          }
          if (diffAllTime <= 0) {
            newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам не доступен, поскольку сумма выплат превышает сумму депозитов на нашем сайте.`
            newCashbackResponse.availalbe = false
          }

          tableBodyCashback.insertRow().innerHTML = `<th style="text-align: center">Кешбек</th>`
          tableBodyCashback.rows[8].cells[0].colSpan = '2'


          tableBodyCashback.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${newCashbackResponse.cashbackAmount.toFixed(2)} ${currCashback}</span>`
          tableBodyCashback.rows[9].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${newCashbackResponse.percentage * 100} %</span>`


          for (let i=2; i <= tableBodyCashback.rows.length-1; i++) {
            for (let j=0; j <= tableBodyCashback.rows[i].cells.length - 1; j++) {
              if ( parseFloat(tableBodyCashback.rows[i].cells[j].innerText) <= 0) {
                tableBodyCashback.rows[i].cells[j].firstChild.classList.add('status_tag', 'red')
              }
              if ( parseFloat(tableBodyCashback.rows[i].cells[j].innerText) > 0) {
                tableBodyCashback.rows[i].cells[j].firstChild.classList.add('status_tag', 'green')
              }
            }
          }

          tableBodyCashback.insertRow().insertCell().innerText = newCashbackResponse.script
          tableBodyCashback.rows[10].cells[0].colSpan = 2
          if (newCashbackResponse.availalbe == true) tableBodyCashback.rows[10].cells[0].classList.add('yes_bonus') 
          else tableBodyCashback.rows[10].cells[0].classList.add('no_bonus')
          tableBodyCashback.rows[10].cells[0].onclick = (e) => {
            navigator.clipboard.writeText(e.target.innerText)
          } 
          tableBodyCashback.style.removeProperty('display')
          loaderDivCashback.remove()
        })
      })
    })
  })
})

  //----------------------------------------------------End of Cashback

  // ---------------------------------------------------Start Personal Sport Bonus

     let divSportBonus = createTablePanel('sport-bonus-panel', 'Cheking for FreeBet', loaderDivSportBonus, true)
     divSportBonus.querySelector('table tbody').insertRow().innerHTML = '<th>Последний бонус</th>'
     divSportBonus.querySelector('table tbody').insertRow().innerHTML = '<th>Дата последнего</th>'
     divSportBonus.querySelector('table tbody').insertRow().innerHTML = '<th>Потрачено на спорт</th>'

     checkSportBonus(userid,userProject, currCashback).then((bonusResponse) => {
       divSportBonus.querySelector('table tbody').rows[0].insertCell().innerHTML = bonusResponse.LastBonusName
       divSportBonus.querySelector('table tbody').rows[1].insertCell().innerHTML = bonusResponse.lastBonusDate.replaceAll(/[a-zA-Z]/gm, ' ')
       divSportBonus.querySelector('table tbody').rows[2].insertCell().innerHTML = bonusResponse.lostFunds
       divSportBonus.querySelector('table tbody').insertRow().insertCell().innerHTML = bonusResponse.personalName
       if (bonusResponse.personalName == 'NO PERSONAL FREEBET') divSportBonus.querySelector('table tbody').rows[3].classList.add('no_bonus')
       else divSportBonus.querySelector('table tbody').rows[3].classList.add('yes_bonus')
       divSportBonus.querySelector('table tbody').rows[3].cells[0].colSpan = 2
       divSportBonus.querySelector('table tbody').rows[3].cells[0].onclick = (elem) => {
         navigator.clipboard.writeText(elem.target.innerText)
       }
       loaderDivSportBonus.remove()
     })

     function createTablePanel (divId, nameTable, loader, collapsible) {
  
      let mainDiv = document.createElement('div')
      mainDiv.id = divId
      mainDiv.classList.add('sidebar_section', 'panel')
      if (collapsible == true) mainDiv.classList.add('collapsible')
      mainDiv.insertAdjacentHTML('afterbegin', `<h3>${nameTable}</h3>`)
    
      let panelContent = document.createElement('div')
      panelContent.className = 'panel_contents'
      panelContent.style.display = 'none'
      mainDiv.append(panelContent)
    
      if (collapsible == true) {
        mainDiv.firstElementChild.onclick = () => {
          if (mainDiv.firstElementChild.classList.contains('expanded')) {
            mainDiv.firstElementChild.classList.remove('expanded')
            panelContent.style.display = 'none'
          } else {
            mainDiv.firstElementChild.classList.add('expanded')
            panelContent.style.removeProperty('display')
          }
        }
      }
    
      let attributesTable = document.createElement('div')
      attributesTable.className = 'attributes_table'
      panelContent.append(attributesTable)
      panelContent.append(loader)
    
      let table = document.createElement('table')
      attributesTable.append(table)
    
      let head = document.createElement('thead')
      table.append(head)
    
      let body = document.createElement('tbody')
      table.append(body)
    
    
      return mainDiv
    }
    
    async function checkSportBonus (userId, project, currency) {
    
      let responseSportBonus = new Object()
      let lastBonusBetWin = '000'
      responseSportBonus.LastBonusName = 'NO SPORT BONUS FINDED'
      responseSportBonus.lastBonusDate = '2000-01-01 00:00:00'
      let urlBonusBets = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/sport/bets?filters[user_id]=${userId}&filters[bet_balance_type]=bonus_balance_bets&limit=50&offset=0&locale=ru`
      let bonusResponse = await fetch(urlBonusBets)
      let bonusJson = await bonusResponse.json()
      // console.log(bonusJson)
      if (bonusJson.bets.length != 0) {
        for (i = 0; i <= bonusJson.bets.length - 1; i++) {
          if (String(bonusJson.bets[i].related_bonus_info.bonus_title).includes('PERSONAL FREEBET') || ( bonusJson.bets[i].provider == 'betby' && /^\d+$/gm.test(bonusJson.bets[i].related_bonus_info.bonus_title))) {
            responseSportBonus.LastBonusName = bonusJson.bets[i].related_bonus_info.bonus_title
            responseSportBonus.lastBonusDate = bonusJson.bets[i].created_at
            if (bonusJson.bets[i].result == 'win') lastBonusBetWin = parseFloat(String(bonusJson.bets[i].payout_cents).slice(0, -2))
            break
          }
        }
      }
      
      let urlRealBets = `https://admin.crimson.${project}.prd.maxbit.private/admin/api/sport/bets/stats?filters[user_id]=${userId}&filters[bet_balance_type]=real_balance_bets&filters[created_after]=${responseSportBonus.lastBonusDate}&locale=ru`
      let realResponse = await fetch(urlRealBets)
      let amount, payout
      let realJson = await realResponse.json()
      // console.log(realJson)
      if (realJson.stats.length != 0) {
        if (realJson.stats[0].amount_cents) amount = parseFloat(String(realJson.stats[0].amount_cents).slice(0, -2))
        else amount = 0
        if (realJson.stats[0].payout_cents) payout = parseFloat(String(realJson.stats[0].payout_cents).slice(0, -2)) 
        else payout = 0
        responseSportBonus.lostFunds = amount - payout - parseFloat(String(lastBonusBetWin).slice(0, -2))
      }
      else responseSportBonus.lostFunds = 0
    
      if (currency == 'RUB' || currency == 'INR') {
        if (responseSportBonus.lostFunds >= 10000 && responseSportBonus.lostFunds <= 30000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 1000
        }
        if (responseSportBonus.lostFunds >= 30001 && responseSportBonus.lostFunds <= 50000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 3000
        }
        if (responseSportBonus.lostFunds >= 50001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 5000
        }
      }
      if (currency == 'UAH') {
        if (responseSportBonus.lostFunds >= 4000 && responseSportBonus.lostFunds <= 12000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 400
        }
        if (responseSportBonus.lostFunds >= 12001 && responseSportBonus.lostFunds <= 20000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 1200
        }
        if (responseSportBonus.lostFunds >= 20001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 2000
        }
      }
      if (currency == 'KZT') {
        if (responseSportBonus.lostFunds >= 50000 && responseSportBonus.lostFunds <= 150000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 5000
        }
        if (responseSportBonus.lostFunds >= 150001 && responseSportBonus.lostFunds <= 250000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 15000
        }
        if (responseSportBonus.lostFunds >= 250001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 25000
        }
      }
      if (currency == 'EUR' || currency == 'USD') {
        if (responseSportBonus.lostFunds >= 100 && responseSportBonus.lostFunds <= 300) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 10
        }
        if (responseSportBonus.lostFunds >= 301 && responseSportBonus.lostFunds <= 500) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 30
        }
        if (responseSportBonus.lostFunds >= 501) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 50
        }
      }
      if (currency == 'BRL' || currency == 'PLN' || currency == 'PEN') {
        if (responseSportBonus.lostFunds >= 500 && responseSportBonus.lostFunds <= 1500) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 50
        }
        if (responseSportBonus.lostFunds >= 1501 && responseSportBonus.lostFunds <= 2500) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 150
        }
        if (responseSportBonus.lostFunds >= 2501) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 250
        }
      }
      if (currency == 'NOK' ) {
        if (responseSportBonus.lostFunds >= 1000 && responseSportBonus.lostFunds <= 3000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 100
        }
        if (responseSportBonus.lostFunds >= 3001 && responseSportBonus.lostFunds <= 5000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 300
        }
        if (responseSportBonus.lostFunds >= 5001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 500
        }
      }
  
      if (currency == 'CAD' || currency == 'AUD' || currency == 'NZD' || currency == 'AZN' ) {
        if (responseSportBonus.lostFunds >= 200 && responseSportBonus.lostFunds <= 600) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 20
        }
        if (responseSportBonus.lostFunds >= 601 && responseSportBonus.lostFunds <= 1000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 60
        }
        if (responseSportBonus.lostFunds >= 1001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 100
        }
      }
      if (currency == 'MXN' || currency == 'ZAR') {
        if (responseSportBonus.lostFunds >= 2000 && responseSportBonus.lostFunds <= 6000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 200
        }
        if (responseSportBonus.lostFunds >= 6001 && responseSportBonus.lostFunds <= 10000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 600
        }
        if (responseSportBonus.lostFunds >= 10001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 1000
        }
      }
      if (currency == 'TRY') {
        if (responseSportBonus.lostFunds >= 3000 && responseSportBonus.lostFunds <= 9000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 300
        }
        if (responseSportBonus.lostFunds >= 9001 && responseSportBonus.lostFunds <= 15000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 900
        }
        if (responseSportBonus.lostFunds >= 15001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 1500
        }
      }
      if (currency == 'CLP') {
        if (responseSportBonus.lostFunds >= 100000 && responseSportBonus.lostFunds <= 300000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 10000
        }
        if (responseSportBonus.lostFunds >= 300001 && responseSportBonus.lostFunds <= 500000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 30000
        }
        if (responseSportBonus.lostFunds >= 500001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 50000
        }
      }
      if (currency == 'JPY') {
        if (responseSportBonus.lostFunds >= 10000 && responseSportBonus.lostFunds <= 25000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET C'
          responseSportBonus.bonusAmount = 2000
        }
        if (responseSportBonus.lostFunds >= 25001 && responseSportBonus.lostFunds <= 50000) {
          responseSportBonus.personalName = 'PERSONAL FREEBET B'
          responseSportBonus.bonusAmount = 5000
        }
        if (responseSportBonus.lostFunds >= 50001) {
          responseSportBonus.personalName = 'PERSONAL FREEBET A'
          responseSportBonus.bonusAmount = 10000
        }
      }
      if (!responseSportBonus.personalName && !responseSportBonus.bonusAmount) {
        responseSportBonus.personalName = 'NO PERSONAL FREEBET'
        responseSportBonus.bonusAmount = 0
      }
      // console.log(responseSportBonus)
      // console.log(urlRealBets)
      return responseSportBonus
    }
  ///
///
///
///
///
///
///
///
///
///
///
///
///
///
  //-------------------------------------------LIVE CB
let divCashbackLiveCb = document.createElement('div')
divCashbackLiveCb.id = 'livecashback_checking_section'
divCashbackLiveCb.classList.add('sidebar_section', 'panel', 'collapsible')
divCashbackLiveCb.insertAdjacentHTML('afterbegin', '<h3>Checking for LIVE cashback</h3>')

let divPanelContentLiveCb = document.createElement('div')

divPanelContentLiveCb.className = 'panel_contents'
divPanelContentLiveCb.style.display = 'none'
divCashbackLiveCb.append(divPanelContentLiveCb)

divCashbackLiveCb.firstElementChild.onclick = () => {
  if (divCashbackLiveCb.firstElementChild.classList.contains('expanded')) {
    divCashbackLiveCb.firstElementChild.classList.remove('expanded')
    divPanelContentLiveCb.style.display = 'none'
  } else {
    divCashbackLiveCb.firstElementChild.classList.add('expanded')
    divPanelContentLiveCb.style.removeProperty('display')
  }
}

let divAttributesTableLiveCb = document.createElement('div')
divAttributesTableLiveCb.className = 'attributes_table'
divPanelContentLiveCb.append(divAttributesTableLiveCb)
divPanelContentLiveCb.append(loaderDivLiveCb)

let tableLiveCb = document.createElement('table')
divAttributesTableLiveCb.append(tableLiveCb)

let tableHeadLiveCb = document.createElement('thead')
tableLiveCb.append(tableHeadLiveCb)

let tableBodyLiveCb = document.createElement('tbody')

tableLiveCb.append(tableBodyLiveCb)

let liveCashbackResult = {
  percentage: 0,
  sum: 0,
  text: '',
  alltimeAvailable: false,
  gamesAvailable: false,
  playersAvailable: false
}
getCashbackDates(userProject).then((dates) => {
  tableBodyLiveCb.insertRow().innerHTML = `<th>Начало периода:</th>`
  tableBodyLiveCb.rows[0].insertCell().innerText = dates.from
  // tableChashback.rows[0].cells[1].rowSpan = 2

  tableBodyLiveCb.insertRow().innerHTML = `<th>Конец периода:</th>`
  tableBodyLiveCb.rows[1].insertCell().innerText = dates.to
  // tableBodyCashback.rows[1].cells[1].rowSpan = 2
    // tableBodyCashback.style.display = 'none'
    tableBodyLiveCb.style.textAlign = 'center'
  let newCashbackResponse = {
    slotActivityAmount: 0,
    allActivityAmount: 0,
    LiveActivityAmount: 0,
    bonusesIssueAmount: 0,
    fsIssueAmount: 0,
    cashbackAmount: 0,
    script: '',
    finalAmount: 0,
    liveCashbackAmount: 0,
    percentage: 0,
    availalbe: false,
  }
  newCashbackResponse.percentage = 0.05


  tableBodyLiveCb.insertRow().insertCell().innerText = "0%"
  tableBodyLiveCb.rows[2].cells[0].colSpan = '2'
  getReportGames(userProject, dates.from, dates.to, currCashback, userMail, 'live').then((liveReport) => {
    tableBodyLiveCb.rows[2].cells[0].innerHTML = "25%"
    getReportGames(userProject, dates.from, dates.to, currCashback, userMail, 'no').then((allReport) => {
      tableBodyLiveCb.rows[2].cells[0].innerHTML = "50%"
      getBonusesAndFsAmount(userProject, accountCurrId, dates.from, dates.to, 'FreespinIssue', currCashback).then((fsIssueAmount)=> {
        tableBodyLiveCb.rows[2].cells[0].innerHTML = "75%"
        getBonusesAndFsAmount(userProject, accountCurrId, dates.from, dates.to, 'BonusIssue', currCashback).then((bonusesIssueAmount) => {
          let slotActivityAmount = liveReport.totalProfit
          let allActivityAmount = allReport.totalProfit
          tableBodyLiveCb.deleteRow(2)
          tableBodyLiveCb.insertRow().innerHTML = `<th style="text-align: center"> Отчет по депозитной и игровой активности </th>`
          tableBodyLiveCb.rows[2].cells[0].colSpan = '2'
      
          tableBodyLiveCb.insertRow().insertCell().innerText = `Live`
          tableBodyLiveCb.rows[3].insertCell().innerText = `Все игры`
      
          tableBodyLiveCb.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${slotActivityAmount} ${currCashback}</span>`
          tableBodyLiveCb.rows[4].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${allActivityAmount} ${currCashback}</span>`

          tableBodyLiveCb.insertRow().innerHTML = `<th style="text-align: center">Суммы начисленных бонусов и фриспинов</th>`
          tableBodyLiveCb.rows[5].cells[0].colSpan = '2'

          tableBodyLiveCb.insertRow().insertCell().innerText = `Фриспины`
          tableBodyLiveCb.rows[6].insertCell().innerText = `Бонусы`
          tableBodyLiveCb.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${fsIssueAmount} ${currCashback}</span>`
          tableBodyLiveCb.rows[7].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${bonusesIssueAmount} ${currCashback}</span>`
          newCashbackResponse.cashbackAmount = Math.min(slotActivityAmount, allActivityAmount) - (bonusesIssueAmount + fsIssueAmount)
          // newCashbackResponse.liveCashbackAmount = Math.floor((newCashbackResponse.LiveActivityAmount - (newCashbackResponse.bonusesIssueAmount + newCashbackResponse.fsIssueAmount)) * 0.05 / 10)

          if (isContain(userProject, projectsDynamicCash)) {
            if (newCashbackResponse.cashbackAmount < cashbackDynamic[currCashback][0]) {
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в Live-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
              newCashbackResponse.availalbe = false
            }
            if (newCashbackResponse.cashbackAmount >= cashbackDynamic[currCashback][0]) {
              newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currCashback]} за расчетный период.`
              newCashbackResponse.availalbe = true
            }
          }
          if (!isContain(userProject, projectsDynamicCash)) {
            if (newCashbackResponse.cashbackAmount < cashbackPermament[currCashback]) {
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в Live-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
              newCashbackResponse.availalbe = false
            }
            if (newCashbackResponse.cashbackAmount >= cashbackPermament[currCashback]) {
              newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currCashback]} за расчетный период.`
              newCashbackResponse.availalbe = true
            }
          }

          if (userProject == "rox") {
            if (newCashbackResponse.cashbackAmount < cashbackPermament[currCashback]) {
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма ставок, сделанных вами на реальные денежные средства в Live-играх не превышает сумму выигрышей более чем на 50 евро за расчетный период.`
              newCashbackResponse.availalbe = false
            }
            if (newCashbackResponse.cashbackAmount >= cashbackPermament[currCashback]) {
              newCashbackResponse.finalAmount = Math.floor(newCashbackResponse.cashbackAmount * newCashbackResponse.percentage / 10) * 10
              newCashbackResponse.script = `${userFirstName}, по предварительной информации, вам доступен кешбек в размере ${newCashbackResponse.finalAmount} ${currencyNames[currCashback]} за расчетный период.`
              newCashbackResponse.availalbe = true
            }
          }

          if (newCashbackResponse.cashbackAmount < 0) {
            newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку сумма выигрышей превышает сумму ставок, сделанных вами на реальные денежные средства в Live-играх за расчетный период.`
            newCashbackResponse.availalbe = false
          }
          if (slotActivityAmount == 0) {
            newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам недоступен, поскольку вы не совершали ставок в Live-играх за расчетный период.`
            newCashbackResponse.availalbe = false
          }
          if (diffAllTime <= 0) {
            newCashbackResponse.script = `${userFirstName}, по предварительной информации, кешбек вам не доступен, поскольку сумма выплат превышает сумму депозитов на нашем сайте.`
            newCashbackResponse.availalbe = false
          }

          tableBodyLiveCb.insertRow().innerHTML = `<th style="text-align: center">Кешбек</th>`
          tableBodyLiveCb.rows[8].cells[0].colSpan = '2'


          tableBodyLiveCb.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${newCashbackResponse.cashbackAmount} ${currCashback}</span>`
          tableBodyLiveCb.rows[9].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${newCashbackResponse.percentage * 100} %</span>`


          for (let i=2; i <= tableBodyLiveCb.rows.length-1; i++) {
            for (let j=0; j <= tableBodyLiveCb.rows[i].cells.length - 1; j++) {
              if ( parseFloat(tableBodyLiveCb.rows[i].cells[j].innerText) <= 0) {
                tableBodyLiveCb.rows[i].cells[j].firstChild.classList.add('status_tag', 'red')
              }
              if ( parseFloat(tableBodyLiveCb.rows[i].cells[j].innerText) > 0) {
                tableBodyLiveCb.rows[i].cells[j].firstChild.classList.add('status_tag', 'green')
              }
            }
          }
          console.log(`cashback: ${newCashbackResponse.cashbackAmount}`)

          tableBodyLiveCb.insertRow().insertCell().innerText = newCashbackResponse.script
          tableBodyLiveCb.rows[10].cells[0].colSpan = 2
          if (newCashbackResponse.availalbe == true) tableBodyLiveCb.rows[10].cells[0].classList.add('yes_bonus') 
          else tableBodyLiveCb.rows[10].cells[0].classList.add('no_bonus')
          tableBodyLiveCb.rows[10].cells[0].onclick = (e) => {
            navigator.clipboard.writeText(e.target.innerText)
          } 
          tableBodyLiveCb.style.removeProperty('display')
          loaderDivLiveCb.remove()
        })
      })
    })
  })
})
  //------------------------------LiveCB
  //------------------------------Cheking personal deposit bonus
//   let divPersonalDep = document.createElement('div')
// divPersonalDep.id = 'personaldepbonus_checking_section'
// divPersonalDep.classList.add('sidebar_section', 'panel', 'collapsible')
// divPersonalDep.insertAdjacentHTML('afterbegin', '<h3>Checking for personal deposit bonus</h3>')

// let divPanelContentPersonalDep = document.createElement('div')
// divPanelContentPersonalDep.className = 'panel_contents'
// divPanelContentPersonalDep.style.display = 'none'
// divPersonalDep.append(divPanelContentPersonalDep)
// divPersonalDep.firstElementChild.onclick = () => {
//   if (divPersonalDep.firstElementChild.classList.contains('expanded')) {
//     divPersonalDep.firstElementChild.classList.remove('expanded')
//     divPanelContentPersonalDep.style.display = 'none'
//   } else {
//     divPersonalDep.firstElementChild.classList.add('expanded')
//     divPanelContentPersonalDep.style.removeProperty('display')
//   }
// }
// let divAttributesTablePersonalDep = document.createElement('div')
// divAttributesTablePersonalDep.className = 'attributes_table'
// divPanelContentPersonalDep.append(divAttributesTablePersonalDep)
// divPanelContentPersonalDep.append(loaderDivPersonalDep)

// let tablePersonalDep = document.createElement('table')
// divAttributesTablePersonalDep.append(tablePersonalDep)

// let tableHeadPersonalDep = document.createElement('thead')
// tablePersonalDep.append(tableHeadPersonalDep)

// let tableBodyPersonalDep = document.createElement('tbody')

// tablePersonalDep.append(tableBodyPersonalDep)

// getBonusesIssuesPage(userProject, userid, isVip).then((bonusesIssue) => {
//   if (depBonusAvail == true) {
//     let personalDepBonus = checkDepositBonus(hold, status_tag)
//     if (bonusesIssue.vipdepcount != 0 && status_tag != 'A-segment'){
//       tableBodyPersonalDep.insertRow().innerHTML = 'БОНУС НЕДОСТУПЕН НА ЭТОЙ НЕДЕЛЕ'
//     }
//     if (bonusesIssue.vipdepcount == 0) {
//       if (personalDepBonus.dep.availalbe == true) {
//         let lists = personalDepBonus.dep.name.split(',')
//         for (i=0; i<=lists.length - 1; i++){
//           tableBodyPersonalDep.insertRow().innerHTML = lists[i]
//         }
//       }
//       if (personalDepBonus.ins.availalbe == true) {
//         let lists = personalDepBonus.ins.name.split(',')
//         for (i=0; i<=lists.length - 1; i++){
//           tableBodyPersonalDep.insertRow().innerHTML = lists[i]
//         }
//       }
//     }
//   } else tableBodyPersonalDep.insertRow().innerHTML = 'БОНУС НЕДОСТУПЕН ПО СУММЕ ДЕПА'
// })
//------------------------

//------------------------NEW LOYAL BONYS
// Создание и настройка элемента divNewLoyal
let divNewLoyal = document.createElement('div');
divNewLoyal.id = 'new_loyal_section';
divNewLoyal.classList.add('sidebar_section', 'panel', 'collapsible');
divNewLoyal.insertAdjacentHTML('afterbegin', '<h3>New LOYAL</h3>');

// Создание и настройка элемента divPanelContentNewLoyal
let divPanelContentNewLoyal = document.createElement('div');
divPanelContentNewLoyal.className = 'panel_contents';
divPanelContentNewLoyal.style.display = 'none';
divNewLoyal.append(divPanelContentNewLoyal);

// Обработчик клика для первого дочернего элемента divNewLoyal
divNewLoyal.firstElementChild.onclick = () => {
  if (divNewLoyal.firstElementChild.classList.contains('expanded')) {
    divNewLoyal.firstElementChild.classList.remove('expanded');
    divPanelContentNewLoyal.style.display = 'none';
  } else {
    divNewLoyal.firstElementChild.classList.add('expanded');
    divPanelContentNewLoyal.style.removeProperty('display');
  }
};

// Создание и настройка элемента divAttributesTableNewLoyal
let divAttributesTableNewLoyal = document.createElement('div');
divAttributesTableNewLoyal.className = 'attributes_table';

// Создание элемента загрузчика
let loaderDivNewLoyal = document.createElement('div');
loaderDivNewLoyal.className = 'loader'; // Пример класса для загрузчика

// Добавление элементов в divPanelContentNewLoyal
divPanelContentNewLoyal.append(divAttributesTableNewLoyal);
divPanelContentNewLoyal.append(loaderDivNewLoyal);

// Создание таблицы
let tableNewLoyal = document.createElement('table');
divAttributesTableNewLoyal.append(tableNewLoyal);

// Создание заголовка таблицы
let tableHeadNewLoyal = document.createElement('thead');
tableNewLoyal.append(tableHeadNewLoyal);

// Создание тела таблицы
let tableBodyNewLoyal = document.createElement('tbody');
tableNewLoyal.append(tableBodyNewLoyal);

// Функция для получения данных и заполнения таблицы
async function loadAndDisplayData() {
  try {
    const responseCaerdMarketing = await getMarketingCardPlayerInfo(userProject, userid, currCashback);
    // Очистка тела таблицы
    tableBodyNewLoyal.innerHTML = '';

    // Добавление строк с данными
    tableBodyNewLoyal.insertRow().innerHTML = `<th style="width: 100%;">RTC</th>`;
    const rtcCell = tableBodyNewLoyal.rows[tableBodyNewLoyal.rows.length - 1].insertCell();
    rtcCell.innerText = responseCaerdMarketing.rtc;
    zoneColor(rtcCell, responseCaerdMarketing.rtc, 'RTC');
    rtcCell.style.fontWeight = 'bold';

    tableBodyNewLoyal.insertRow().innerHTML = `<th>Q stress RTC</th>`;
    // Проверка на undefined и использование альтернативного значения
    let stressRTCValue;
    if (responseCaerdMarketing.stressRTC === undefined) {
      const loyalCardResponse = await getLoyaltyCardPlayerInfo(userProject, userid, currCashback);
      stressRTCValue = loyalCardResponse.stressRTC_30;
    } else {
      stressRTCValue = responseCaerdMarketing.stressRTC;
    }
    const qStressRTCCell = tableBodyNewLoyal.rows[tableBodyNewLoyal.rows.length - 1].insertCell();
    qStressRTCCell.innerText = stressRTCValue;
    zoneColor(qStressRTCCell, stressRTCValue, 'Q_Stress_RTC');
    qStressRTCCell.style.fontWeight = 'bold';

    tableBodyNewLoyal.insertRow().innerHTML = `<th style="width: 100%;">QBETDEP</th>`;
    const qbetdepCell = tableBodyNewLoyal.rows[tableBodyNewLoyal.rows.length - 1].insertCell();
    qbetdepCell.innerText = responseCaerdMarketing.qbetdep;
    zoneColor(qbetdepCell, responseCaerdMarketing.qbetdep, 'QBETDEP');
    qbetdepCell.style.fontWeight = 'bold';

    tableBodyNewLoyal.insertRow().innerHTML = `<th>% бонусов в Дропе</th>`;
    const vdropeCell = tableBodyNewLoyal.rows[tableBodyNewLoyal.rows.length - 1].insertCell();
    vdropeCell.innerText = responseCaerdMarketing.Vdrope;
    zoneColor(vdropeCell, responseCaerdMarketing.Vdrope, '% бонусов в Дропе');
    vdropeCell.style.fontWeight = 'bold';

    // Добавление новой строки с заголовком "HOLD" и значением из второго элемента с классом "col col-hold"
    const holdElements = document.querySelectorAll('.col.col-hold');
if (holdElements.length > 1) {
  const holdValue = holdElements[1].innerText;
  tableBodyNewLoyal.insertRow().innerHTML = `<th>HOLD</th>`;
  const holdCell = tableBodyNewLoyal.rows[tableBodyNewLoyal.rows.length - 1].insertCell();
  holdCell.innerText = holdValue;
  zoneColor(holdCell, parseFloat(holdValue), 'HOLD'); // Преобразование значения в число
  holdCell.style.fontWeight = 'bold';
}
// Определение уровня риска после загрузки и отображения данных
const riskLevel = determineRiskLevel(tableBodyNewLoyal);

// Установка переменной riskStatusName на основе результата determineRiskLevel
let riskStatusName;
switch (riskLevel) {
  case 'Very High':
    riskStatusName = 'VERY HIGH RISK';
    break;
  case 'High':
    riskStatusName = 'HIGH RISK';
    break;
  case 'Medium':
    riskStatusName = 'MEDIUM RISK';
    break;
  case 'Low':
    riskStatusName = 'LOW RISK';
    break;
  case 'Very Low':
    riskStatusName = 'VERY LOW RISK';
    break;
  default:
    riskStatusName = 'UNKNOWN RISK';
    break;
}


// Установка переменной riskStatusAvailable в true, если статус риска доступен
let riskStatusAvailable = true;

// Вставка статуса риска в таблицу
addRiskStatusToTable(riskStatusName, riskStatusAvailable, tableBodyNewLoyal, userFirstName);

} catch (error) {
console.error('Ошибка при получении данных:', error);
// Обработка ошибки, например, скрытие загрузчика
loaderDivNewLoyal.style.display = 'none';
} finally {
// Удаление загрузчика после загрузки данных
loaderDivNewLoyal.style.display = 'none';
}
}

function zoneColor(cell, value, metric) {
if (metric === 'RTC') {
if (value > 4) {
  cell.style.backgroundColor = 'mediumseagreen';
} else if (value >= 3 && value <= 4) {
  cell.style.backgroundColor = 'steelblue';
} else if (value >= 2 && value <= 3) {
  cell.style.backgroundColor = 'palegoldenrod';
} else if (value < 2) {
  cell.style.backgroundColor = 'lightcoral';
}
} else if (metric === 'Q_Stress_RTC') {
if (value < 20) {
  cell.style.backgroundColor = 'mediumseagreen';
} else if (value >= 20 && value <= 30) {
  cell.style.backgroundColor = 'steelblue';
} else if (value > 30 && value <= 40) {
  cell.style.backgroundColor = 'palegoldenrod';
} else if (value > 40) {
  cell.style.backgroundColor = 'lightcoral';
}
} else if (metric === 'QBETDEP') {
if (value > 7) {
  cell.style.backgroundColor = 'mediumseagreen';
} else if (value >= 5 && value <= 7) {
  cell.style.backgroundColor = 'steelblue';
} else if (value >= 4 && value <= 5) {
  cell.style.backgroundColor = 'palegoldenrod';
} else if (value < 4) {
  cell.style.backgroundColor = 'lightcoral';
}
} else if (metric === '% бонусов в Дропе') {
if (value < 10) {
  cell.style.backgroundColor = 'mediumseagreen';
} else if (value >= 10 && value <= 15) {
  cell.style.backgroundColor = 'steelblue';
} else if (value > 15 && value <= 20) {
  cell.style.backgroundColor = 'palegoldenrod';
} else if (value > 20) {
  cell.style.backgroundColor = 'lightcoral';
}
} else if (metric === 'HOLD') {
if (value > 25) {
  cell.style.backgroundColor = 'mediumseagreen';
} else if (value >= 20 && value <= 25) {
  cell.style.backgroundColor = 'steelblue';
} else if (value >= 15 && value <= 20) {
  cell.style.backgroundColor = 'palegoldenrod';
} else if (value < 15) {
  cell.style.backgroundColor = 'lightcoral';
}
}
}

function determineRiskLevel(tableBody) {
  let greenCount = 0;
  let blueCount = 0;
  let yellowCount = 0;
  let redCount = 0;

  // Проходим по всем ячейкам в таблице и считаем количество ячеек в каждой зоне
  for (let row of tableBody.rows) {
    for (let cell of row.cells) {
      if (cell.style.backgroundColor === 'mediumseagreen') {
        greenCount++;
      } else if (cell.style.backgroundColor === 'steelblue') {
        blueCount++;
      } else if (cell.style.backgroundColor === 'palegoldenrod') {
        yellowCount++;
      } else if (cell.style.backgroundColor === 'lightcoral') {
        redCount++;
      }
    }
  }

  // Определяем статус риска на основе количества ячеек в каждой зоне
  if (redCount >= 3 || yellowCount >= 3) {
    return 'Very High';
  } else if (redCount >= 1 || yellowCount >= 1) {
    return 'High';
  } else if (blueCount >= 3 && greenCount >= 1 && greenCount <= 2) {
    return 'Medium';
  } else if ((greenCount === 3 || greenCount === 4) && (blueCount === 1 || blueCount === 2)) {
    return 'Low';
  } else if (greenCount === 5 && blueCount === 0 && yellowCount === 0 && redCount === 0) {
    return 'Very Low';
  } else {
    // Если ни одно из условий не выполняется, возвращаем 'Unknown'
    return 'Unknown';
  }
}

function addRiskStatusToTable(riskStatusName, riskStatusAvailable, tableBody, userFirstName, redValuesCount) {
  if (riskStatusAvailable == true) {
    const newRow = tableBody.insertRow();
    const newCell = newRow.insertCell();
    newCell.innerText = riskStatusName;
    newCell.colSpan = 2;
    newCell.style.textAlign = 'center';
    newCell.style.cursor = 'pointer';
    newCell.style.whiteSpace = 'normal';
    newCell.style.wordWrap = 'break-word';

    let buttonsRow1 = null;
    let buttonsRow2 = null;
    let subButtonsRow1 = null;
    let subButtonsRow2 = null;
    let subButtonsRow3 = null;
    let textRow = null;

    newCell.onclick = () => {
      clearRows();

      switch (riskStatusName) {
        case 'VERY HIGH RISK':
          newCell.style.backgroundColor = '#fdd8d8';
          showText(`${userFirstName}, на данный момент не могу предложить вам какой-либо персональный бонус. Вы можете проявить еще немного игровой активности и обратиться за начислением позднее.`);
          break;
        case 'HIGH RISK':
          newCell.style.backgroundColor = '#fdd8d8';
          addBonusButtons();
          break;
        case 'MEDIUM RISK':
          newCell.style.backgroundColor = '#fdd8d8';
          addBonusButtons();
          break;
        case 'LOW RISK':
          newCell.style.backgroundColor = '#fdd8d8';
          addBonusButtons();
          break;
        case 'VERY LOW RISK':
          newCell.style.backgroundColor = '#fdd8d8';
          addBonusButtons();
          break;
        default:
          newCell.style.backgroundColor = '#ffffff';
          showText(`${userFirstName}, уровень риска неизвестен, пожалуйста, свяжитесь с поддержкой.`);
          break;
      }
    };

    function clearRows() {
      if (buttonsRow1) buttonsRow1.remove();
      if (buttonsRow2) buttonsRow2.remove();
      if (subButtonsRow1) subButtonsRow1.remove();
      if (subButtonsRow2) subButtonsRow2.remove();
      if (subButtonsRow3) subButtonsRow3.remove();
      if (textRow) textRow.remove();
    }

    function addBonusButtons() {
      buttonsRow1 = tableBody.insertRow();
      const buttonCell1 = buttonsRow1.insertCell();
      buttonCell1.colSpan = 2;
      buttonCell1.style.textAlign = 'center';
      buttonCell1.style.cursor = 'pointer';
      buttonCell1.style.backgroundColor = '#fdd8d8';
      buttonCell1.style.fontWeight = 'bold';
      buttonCell1.innerText = 'ДЕПОЗИТНЫЙ БОНУС';
      buttonCell1.onclick = () => showDepositBonusOptions();

      buttonsRow2 = tableBody.insertRow();
      const buttonCell2 = buttonsRow2.insertCell();
      buttonCell2.colSpan = 2;
      buttonCell2.style.textAlign = 'center';
      buttonCell2.style.cursor = 'pointer';
      buttonCell2.style.backgroundColor = '#fdd8d8';
      buttonCell2.style.fontWeight = 'bold';
      buttonCell2.innerText = 'БЕЗДЕПОЗИТНЫЙ БОНУС';
      buttonCell2.onclick = () => showNoDepositBonusOptions();
    }

    function showDepositBonusOptions() {
      clearSubRows();

      subButtonsRow1 = tableBody.insertRow();
      const subButtonCell1 = subButtonsRow1.insertCell();
      subButtonCell1.colSpan = 2;
      subButtonCell1.style.textAlign = 'center';
      subButtonCell1.style.cursor = 'pointer';
      subButtonCell1.style.backgroundColor = '#fdd8d8';
      subButtonCell1.style.fontWeight = 'bold';
      subButtonCell1.innerText = 'INSURANCE BONUS A (A7UYDS0CZXPO3DFD)';
      subButtonCell1.onclick = () => showBonusInfo('INSURANCE BONUS A (A7UYDS0CZXPO3DFD)');

      subButtonsRow2 = tableBody.insertRow();
      const subButtonCell2 = subButtonsRow2.insertCell();
      subButtonCell2.colSpan = 2;
      subButtonCell2.style.textAlign = 'center';
      subButtonCell2.style.cursor = 'pointer';
      subButtonCell2.style.backgroundColor = '#fdd8d8';
      subButtonCell2.style.fontWeight = 'bold';
      subButtonCell2.innerText = redValuesCount === 1 ? 'DEPOSIT BONUS A A5UYDS8CZXPO1DFD (30х)' : 'DEPOSIT BONUS B A6UYDS9CZXPO2DFD (40х)';
      subButtonCell2.onclick = () => showBonusInfo(redValuesCount === 1 ? 'DEPOSIT BONUS A A5UYDS8CZXPO1DFD (30х)' : 'DEPOSIT BONUS B A6UYDS9CZXPO2DFD (40х)');
    }

    function showNoDepositBonusOptions() {
      clearSubRows();

      subButtonsRow1 = tableBody.insertRow();
      const subButtonCell1 = subButtonsRow1.insertCell();
      subButtonCell1.colSpan = 2;
      subButtonCell1.style.textAlign = 'center';
      subButtonCell1.style.cursor = 'pointer';
      subButtonCell1.style.backgroundColor = '#fdd8d8';
      subButtonCell1.style.fontWeight = 'bold';
      subButtonCell1.innerText = 'PragmaticPlay TOP 100';
      subButtonCell1.onclick = () => showBonusInfo('PragmaticPlay TOP 100');

      subButtonsRow2 = tableBody.insertRow();
      const subButtonCell2 = subButtonsRow2.insertCell();
      subButtonCell2.colSpan = 2;
      subButtonCell2.style.textAlign = 'center';
      subButtonCell2.style.cursor = 'pointer';
      subButtonCell2.style.backgroundColor = '#fdd8d8';
      subButtonCell2.style.fontWeight = 'bold';
      subButtonCell2.innerText = 'Play\'N Go Free Spin';
      subButtonCell2.onclick = () => showBonusInfo('Play\'N Go Free Spin');

      subButtonsRow3 = tableBody.insertRow();
      const subButtonCell3 = subButtonsRow3.insertCell();
      subButtonCell3.colSpan = 2;
      subButtonCell3.style.textAlign = 'center';
      subButtonCell3.style.cursor = 'pointer';
      subButtonCell3.style.backgroundColor = '#fdd8d8';
      subButtonCell3.style.fontWeight = 'bold';
      subButtonCell3.innerText = 'Bgaming Free Spin';
      subButtonCell3.onclick = () => showBgamingFreeSpinOptions();
    }

    function showBgamingFreeSpinOptions() {
      clearSubRows();

      showText('Для провайдера BGaming начисление доступно в трёх вариациях по сумме ставки: 10, 20 и 50 рублей. Какой тип предпочтёте?');

      subButtonsRow1 = tableBody.insertRow();
      const subButtonCell1 = subButtonsRow1.insertCell();
      subButtonCell1.colSpan = 2;
      subButtonCell1.style.textAlign = 'center';
      subButtonCell1.style.cursor = 'pointer';
      subButtonCell1.style.backgroundColor = '#fdd8d8';
      subButtonCell1.style.fontWeight = 'bold';
      subButtonCell1.innerText = 'Bgaming A Free Spin (50р)';
      subButtonCell1.onclick = () => showBonusInfo('Bgaming A Free Spin (50р)');

      subButtonsRow2 = tableBody.insertRow();
      const subButtonCell2 = subButtonsRow2.insertCell();
      subButtonCell2.colSpan = 2;
      subButtonCell2.style.textAlign = 'center';
      subButtonCell2.style.cursor = 'pointer';
      subButtonCell2.style.backgroundColor = '#fdd8d8';
      subButtonCell2.style.fontWeight = 'bold';
      subButtonCell2.innerText = 'Bgaming B Free Spin (20р)';
      subButtonCell2.onclick = () => showBonusInfo('Bgaming B Free Spin (20р)');

      subButtonsRow3 = tableBody.insertRow();
      const subButtonCell3 = subButtonsRow3.insertCell();
      subButtonCell3.colSpan = 2;
      subButtonCell3.style.textAlign = 'center';
      subButtonCell3.style.cursor = 'pointer';
      subButtonCell3.style.backgroundColor = '#fdd8d8';
      subButtonCell3.style.fontWeight = 'bold';
      subButtonCell3.innerText = 'Bgaming C Free Spin (10р)';
      subButtonCell3.onclick = () => showBonusInfo('Bgaming C Free Spin (10р)');
    }

    function clearSubRows() {
      if (subButtonsRow1) subButtonsRow1.remove();
      if (subButtonsRow2) subButtonsRow2.remove();
      if (subButtonsRow3) subButtonsRow3.remove();
    }

    function showText(message) {
      if (textRow) {
        textRow.cells[0].innerText = message;
      } else {
        textRow = tableBody.insertRow();
        const textCell = textRow.insertCell();
        textCell.colSpan = 2;
        textCell.style.textAlign = 'center';
        textCell.style.whiteSpace = 'normal';
        textCell.style.wordWrap = 'break-word';
        textCell.innerText = message;
      }
    }

    function showBonusInfo(bonusName) {
      let message = '';
      let showButton = false;
      switch (bonusName) {
        case 'DEPOSIT BONUS A A5UYDS8CZXPO1DFD (30х)':
          message = 'Могу вам сейчас предложить персональный депозитный бонус в виде 50% к пополнению от 500 рублей или выше. Вейджер у бонуса составит 30, а максимальный выигрыш неограничен. Хотели бы его применить?';
          break;
        case 'DEPOSIT BONUS B A6UYDS9CZXPO2DFD (40х)':
          message = 'Могу вам сейчас предложить персональный депозитный бонус в виде 50% к пополнению от 500 рублей или выше. Вейджер у бонуса составит 40, а максимальный выигрыш неограничен. Хотели бы его применить?';
          showButton = true;
          break;
        case 'INSURANCE BONUS A (A7UYDS0CZXPO3DFD)':
          message = 'Могу вам сейчас предложить бонус-страховку в виде 35% к пополнению от 500 рублей или выше. Вейджер у бонуса составит 30, а максимальный выигрыш неограничен. Хотели бы его применить?';
          break;
        case 'PragmaticPlay TOP 100':
          message = 'В этом случае могу предложить вам 0000 фриспинов по ставке 20 рублей в играх на выбор: John Hunter and the Tomb of the Scarab Queen, Monkey Warrior, Cash Patrol. Вейджер у бонуса будет 0000, а максимальный выигрыш неограничен. Хотели бы его получить?';
          break;
        case 'Play\'N Go Free Spin':
          message = 'В этом случае могу предложить вам 0000 фриспинов по ставке 20 рублей в играх на выбор: Rage to Riches, Aztec Warrior Princess, Frozen Gems, USA Flip. Вейджер у бонуса будет 0000, а максимальный выигрыш неограничен. Хотели бы его получить?';
          break;
        case 'Bgaming A Free Spin (50р)':
          message = 'В этом случае могу предложить вам 0000 фриспинов по ставке 50 рублей в играх на выбор: Journey Flirt, Dragon’s Gold 100, Elvis Frog in Vegas. Вейджер у бонуса будет 0000, а максимальный выигрыш неограничен. Хотели бы его получить?';
          break;
        case 'Bgaming B Free Spin (20р)':
          message = 'В этом случае могу предложить вам 0000 фриспинов по ставке 20 рублей в играх на выбор: Burning Chilli X, Miss Cherry Fruits, Johnny Cash. Вейджер у бонуса будет 0000, а максимальный выигрыш неограничен. Хотели бы его получить?';
          break;
        case 'Bgaming C Free Spin (10р)':
          message = 'В этом случае могу предложить вам 0000 фриспинов по ставке 10 рублей в играх на выбор: Journey Flirt, Lady Wolf Moon, Four Lucky Clover, Candy Monsta. Вейджер у бонуса будет 0000, а максимальный выигрыш неограничен. Хотели бы его получить?';
          break;
        default:
          message = 'Бонус не распознан.';
          break;
      }
      showText(message);
    
      if (showButton) {
        const buttonRow = tableBody.insertRow();
        const buttonCell = buttonRow.insertCell();
        buttonCell.colSpan = 2;
        buttonCell.style.textAlign = 'center';
        buttonCell.style.cursor = 'pointer';
        buttonCell.style.backgroundColor = '#4CAF50'; // Green color
        buttonCell.style.color = 'white';
        buttonCell.style.fontWeight = 'bold';
        buttonCell.innerText = 'НАЧИСЛИТЬ';
        buttonCell.onclick = () => {
          window.location.href = '/admin/players/2930996/edit_deposit_bonus_widget';
        };
      }
    }
  }
}
// Вызов функции для загрузки и отображения данных
loadAndDisplayData();




//  // tableChashback.rows[0].cells[1].rowSpan = 2
//isContain(userProject, newLoyaltyProject, hold)) {
//
//  tableBodyLiveCb.insertRow().innerHTML = `<th>Конец периода:</th>`
//  tableBodyLiveCb.rows[1].insertCell().innerText = dates.to
//  // tableBodyCashback.rows[1].cells[1].rowSpan = 2
//    // tableBodyCashback.style.display = 'none'
//    tableBodyLiveCb.style.textAlign = 'center'
//  let newCashbackResponse = {
//    slotActivityAmount: 0,
//    allActivityAmount: 0,
//    LiveActivityAmount: 0,
//    bonusesIssueAmount: 0,
//    fsIssueAmount: 0,
//    cashbackAmount: 0,
//    script: '',
//    finalAmount: 0,
//    liveCashbackAmount: 0,
//    percentage: 0,
//    availalbe: false,
//  } 6+
//  newCashbackResponse.percentage = 0.05
//
//
//  tableBodyLiveCb.insertRow().insertCell().innerText = "0%"
//  tableBodyLiveCb.rows[2].cells[0].colSpan = '2'
//  getReportGames(userProject, dates.from, dates.to, currCashback, userMail, 'live').then((liveReport) => {
//    tableBodyLiveCb.rows[2].cells[0].innerHTML = "25%"
//    getReportGames(userProject, dates.from, dates.to, currCashback, userMail, 'no').then((allReport) => {
//      tableBodyLiveCb.rows[2].cells[0].innerHTML = "50%"
//      getBonusesAndFsAmount(userProject, accountCurrId, dates.from, dates.to, 'FreespinIssue', currCashback).then((fsIssueAmount)=> {
//        tableBodyLiveCb.rows[2].cells[0].innerHTML = "75%"
//        getBonusesAndFsAmount(userProject, accountCurrId, dates.from, dates.to, 'BonusIssue', currCashback).then((bonusesIssueAmount) => {
//          let slotActivityAmount = liveReport.totalProfit
//          let allActivityAmount = allReport.totalProfit
//          tableBodyLiveCb.deleteRow(2)
//          tableBodyLiveCb.insertRow().innerHTML = `<th style="text-align: center"> Отчет по депозитной и игровой активности </th>`
//          tableBodyLiveCb.rows[2].cells[0].colSpan = '2'
//      
//          tableBodyLiveCb.insertRow().insertCell().innerText = `Live`
//          tableBodyLiveCb.rows[3].insertCell().innerText = `Все игры`
//      
//          tableBodyLiveCb.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${slotActivityAmount} ${currCashback}</span>`
//          tableBodyLiveCb.rows[4].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${allActivityAmount} ${currCashback}</span>`
//
//          tableBodyLiveCb.insertRow().innerHTML = `<th style="text-align: center">Суммы начисленных бонусов и фриспинов</th>`
//          tableBodyLiveCb.rows[5].cells[0].colSpan = '2'
//
//          tableBodyLiveCb.insertRow().insertCell().innerText = `Фриспины`
//          tableBodyLiveCb.rows[6].insertCell().innerText = `Бонусы`
//          tableBodyLiveCb.insertRow().insertCell().innerHTML = `<span style="color: black; font-size: 1em">${fsIssueAmount} ${currCashback}</span>`
//          tableBodyLiveCb.rows[7].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${bonusesIssueAmount} ${currCashback}</span>`
//          newCashbackResponse.cashbackAmount = Math.min(slotActivityAmount, allActivityAmount) - (bonusesIssueAmount + fsIssueAmount)
//          // newCashbackResponse.liveCashbackAmount = Math.floor((newCashbackResponse.LiveActivityAmount - (newCashbackResponse.bonusesIssueAmount + newCashbackResponse.fsIssueAmount)) * 0.05 / 10)

//-------------BD dep
// Извлечение значения даты рождения из элемента с классом "row row-date_of_birth"
let dateOfBirthRow = document.querySelector('.row.row-date_of_birth');
let birthdayText = dateOfBirthRow.querySelector('td').textContent.trim(); // Получаем текст из элемента <td>
let birthday = new Date(birthdayText);

// Устанавливаем год даты рождения на текущий год
let currentYear = new Date().getFullYear();
birthday.setFullYear(currentYear);

// Проверяем, прошел ли день рождения в текущем году
let today = new Date();
let daysSinceBirthday = Math.floor((today - birthday) / (1000 * 60 * 60 * 24));

if (daysSinceBirthday > 7) {
  // Если прошло более 7 дней после дня рождения, увеличиваем год на 1
  birthday.setFullYear(currentYear + 1);
}

let divBDDeps = createTablePanel('bddeps', 'deps for Birthday', loaderBirthdayDep, true);

// Добавляем строку с названием "Дата Рождения"
divBDDeps.querySelector('tbody').insertRow().innerHTML = `<th>Дата Рождения</th>`;
divBDDeps.querySelector('tbody').rows[0].insertCell().innerHTML = `<span style="color: black; font-size: 1em" class="status_tag gray">${birthday.toISOString().split('T')[0]}</span>`;

// Определение дат для 31 и 181 дней до дня рождения в текущем или следующем году
let date30 = new Date(birthday);
let date180 = new Date(birthday);
date30.setDate(birthday.getDate() - 31); // 31 день до дня рождения
date180.setDate(birthday.getDate() - 181); // 181 день до дня рождения

// Проверка на совпадение текущей даты с датой рождения
if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
  // Добавляем кнопку "Поздравление"
  let congratulationButton = document.createElement('button');
  congratulationButton.innerText = 'Поздравление';
  congratulationButton.style.marginTop = '10px';
  congratulationButton.style.marginBottom = '10px';
  congratulationButton.onclick = () => {
    let congratulationText = `${userFirstName}, мы поздравляем вас с днем рождения и желаем удачи, а также всего самого хорошего!✨ Бонус на день рождения будет зачислен вам с 10:00 до 16:00 по московскому времени, но если вы его не обнаружите на вашем игровом балансе, то обращайтесь к нам повторно и мы зачислим вам его вручную.`;
    navigator.clipboard.writeText(congratulationText).then(() => {
      alert('Текст поздравления скопирован в буфер обмена!');
    }).catch(err => {
      console.error('Не удалось скопировать текст: ', err);
    });
  };
  divBDDeps.appendChild(congratulationButton);
}

getReportPlayers(userProject, date30.toISOString().split('T')[0], birthday.toISOString().split('T')[0], currCashback, userMail).then((deps30) => {
  divBDDeps.querySelector('tbody').insertRow().innerHTML = `<th>Депозиты за 31 день до дня рождения</th>`;
  divBDDeps.querySelector('tbody').rows[1].insertCell().innerHTML = `<span style="color: black; font-size: 1em" class="status_tag gray">${deps30.depAmount} ${currCashback}</span>`;
  console.log(deps30);
  
  getReportPlayers(userProject, date180.toISOString().split('T')[0], birthday.toISOString().split('T')[0], currCashback, userMail).then((deps180) => {
    divBDDeps.querySelector('tbody').insertRow().innerHTML = `<th>Депозиты за 181 день до дня рождения</th>`;
    divBDDeps.querySelector('tbody').rows[2].insertCell().innerHTML = `<span style="color: black; font-size: 1em" class="status_tag gray">${deps180.depAmount} ${currCashback}</span>`;
    console.log(deps180);

    loaderBirthdayDep.remove();

    
  });
});

//------------MotivationBD
async function getLastDepDate(project, mail) {
  let paymentsURL = `https://admin.crimson.${project}.prd.maxbit.private/admin/payments?q[user_email_eq]=${mail}&scope=only_success`;
  let response = await fetch(paymentsURL, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    }
  });

  let data = await response.text();
  let lastDepDateResponse = {};
  let lastDepDate = '2000-01-01 00:00:00'; // Значение по умолчанию, если данные не найдены

  if (!data.includes('Payments не найдено')) {
    let paymentTable = new window.DOMParser().parseFromString(data, "text/html");
    lastDepDate = paymentTable.querySelector('#index_table_payments tbody tr td:nth-child(11)').innerText;
  }

  lastDepDateResponse.year = lastDepDate.split('-')[0];
  lastDepDateResponse.month = lastDepDate.split('-')[1];
  lastDepDateResponse.lastMonthDay = new Date(lastDepDateResponse.year, lastDepDateResponse.month, 0).getDate();
  return lastDepDateResponse;
}

let divMotivationBD = createTablePanel('motivatebd', 'Средний депозит', loaderDivMotivationBD, true);

getLastDepDate(userProject, userMail).then((lastDepInfo) => {
  console.log('lastDepInfo', lastDepInfo);

  getReportPlayers(userProject, `${lastDepInfo.year}-${lastDepInfo.month}-01`, `${lastDepInfo.year}-${lastDepInfo.month}-${lastDepInfo.lastMonthDay}`, currCashback, userMail).then((repostPlayerInfo) => {
    console.log('repostPlayerInfo', repostPlayerInfo);

    // Рассчитывает средний депозит
    let avgDepAmount = parseFloat(repostPlayerInfo.depAmount / repostPlayerInfo.depCount).toFixed(2);

    // Добавляет строку со средним депозитом
    divMotivationBD.querySelector('tbody').insertRow().innerHTML = `<th>Средний деп</th>`;
    divMotivationBD.querySelector('tbody').rows[0].insertCell().innerHTML = `<span style="color: black; font-size: 1em">${avgDepAmount}</span>`;

    loaderDivMotivationBD.remove();
  });
});



//Poits onfo
// let detailsPoints = document.createElement('details')
// let summaryPoints = document.createElement('summary')
// summaryPoints.insertAdjacentHTML('afterbegin', '<h3>Checking for points</h3>')
// detailsPoints.append(summaryPoints)


// let divPointsCheking = document.createElement('div')
// divPointsCheking.id = 'points_checking_section'
// divPointsCheking.classList.add('sidebar_section', 'panel', 'collapsible')
// divPointsCheking.insertAdjacentHTML('afterbegin', '<h3>Checking for points</h3>')

// let divPanelContentPoints = document.createElement('div')
// divPanelContentPoints.className = 'panel_contents'
// divPointsCheking.append(divPanelContentPoints)

// let divAttributesTablePoints = document.createElement('div')
// divAttributesTablePoints.className = 'attributes_table'
// divPanelContentPoints.append(divAttributesTablePoints)
// divPanelContentPoints.append(loaderDivPoints)

// let tablePoints = document.createElement('table')
// divAttributesTablePoints.append(tablePoints)

// let tableHeadPoints = document.createElement('thead')
// tablePoints.append(tableHeadPoints)

// let tableBodyPoints = document.createElement('tbody')

// tablePoints.append(tableBodyPoints)

// let pointsDates = getPointsFirstDate(userProject, pointsDays)
// let pointsLast30, pointsLast90, pointBonus30, pointReal30, pointBonus90, pointReal90, pointBonusAll, pointRealAll
// if (userProject == 'starda' ) {
//   getBetsTableInfo(userProject, userid, pointsDates.min, false).then((info) => {
//     pointReal30 = info.bets / pointsBetAmounts[userProject][currCashback]
//     // console.log(`LAST30 REAL ${pointReal30}`)
//     getBetsTableInfo(userProject, userid, pointsDates.min, true).then((info) => {
//       pointBonus30 = info.bets / (pointsBetAmounts[userProject][currCashback] * 2)
//       // console.log(`LAST30 BONUS ${pointBonus30}`)
//       pointsLast30 = pointBonus30 + pointReal30

//       tableBodyPoints.insertRow().innerHTML = `<th>Баллы за ${pointsDays[userProject].min / 86400000} дней</th>`
//       tableBodyPoints.rows[0].insertCell().innerText = pointsLast30

//       getBetsTableInfo(userProject, userid, pointsDates.max, false).then((info) => {
//         pointReal90 = info.bets / pointsBetAmounts[userProject][currCashback]
//         // console.log(`LAST90 REAL ${pointReal90}`)
//         getBetsTableInfo(userProject, userid, pointsDates.max, true).then((info) => {
//           pointBonus90 = info.bets / (pointsBetAmounts[userProject][currCashback] * 2)
//           // console.log(`LAST90 BONUS ${pointBonus90}`)
//           pointsLast90 = pointBonus90 + pointReal90

//           tableBodyPoints.insertRow().innerHTML = `<th>Баллы за ${pointsDays[userProject].max / 86400000} дней</th>`
//           tableBodyPoints.rows[1].insertCell().innerText = pointsLast90

//           getBetsTableInfo(userProject, userid, '2000-01-01', false).then((info) => {
//             pointRealAll = info.bets / pointsBetAmounts[userProject][currCashback]
//             getBetsTableInfo(userProject, userid, '2000-01-01', true).then((info) => {
//               pointBonusAll = info.bets / (pointsBetAmounts[userProject][currCashback] * 2)
//               // console.log(`ALL BONUS ${pointBonusAll}`)
//               // console.log(`ALL REAL ${pointRealAll}`)
//               // console.log(pointBonusAll + pointRealAll)
//               loaderDivPoints.remove()
//             })
//           })
//         })
//       })
//     })
//   })
// }

// if (userProject == 'volna' || userProject == 'drip' || userProject == 'legzo') {
//   getReportPlayers(userProject, pointsDates.min, undefined, currCashback, userMail).then((info) => {
//     pointsLast30 = info.depAmount / pointsBetAmounts[userProject][currCashback]
//     tableBodyPoints.insertRow().innerHTML = `<th>Баллы за ${pointsDays[userProject].min / 86400000} дней</th>`
//     tableBodyPoints.rows[0].cells[0].style.width = '200px'
//     tableBodyPoints.rows[0].insertCell().innerText = pointsLast30

//     tableBodyPoints.rows[0].insertCell().innerHTML = `${pointsStatuses[userProject].prem.name} (${pointsStatuses[userProject].prem.min})`
//     tableBodyPoints.rows[0].insertCell().innerHTML = `${pointsStatuses[userProject].vip.name} (${pointsStatuses[userProject].vip.min})`

//     getReportPlayers(userProject, pointsDates.max, undefined, currCashback, userMail).then((info) => {
//       pointsLast90 = info.depAmount / pointsBetAmounts[userProject][currCashback]
//       tableBodyPoints.insertRow().innerHTML = `<th>Баллы за ${pointsDays[userProject].max / 86400000} дней</th>`
//       tableBodyPoints.rows[1].insertCell().innerText = pointsLast90

//       tableBodyPoints.rows[1].insertCell().innerHTML = `${pointsStatuses[userProject].prem.name} (${pointsStatuses[userProject].prem.max})`
//       tableBodyPoints.rows[1].insertCell().innerHTML = `${pointsStatuses[userProject].vip.name} (${pointsStatuses[userProject].vip.max})`
      
//       loaderDivPoints.remove()
//     })
    
//   })
// }
// if (userProject == 'izzi') {
//   getReportPlayers(userProject, pointsDates.min, undefined, currCashback, userMail).then((info) => {
//     tableBodyPoints.insertRow().innerHTML = `<th>Сумма депов за ${pointsDays[userProject].min / 86400000} день</th>`
//     tableBodyPoints.rows[0].insertCell().innerText = info.depAmount
//     // tableBodyPoints.rows[0].insertCell().innerText = `${pointsStatuses[userProject].prem.name} | ${pointsStatuses[userProject].prem.min}`
//     // tableBodyPoints.rows[0].insertCell().innerText = `${pointsStatuses[userProject].vip.name} | ${pointsStatuses[userProject].vip.min}`

//     getReportPlayers(userProject, pointsDates.max, undefined, currCashback, userMail).then((info) => {
//       tableBodyPoints.insertRow().innerHTML = `<th>Сумма депов за ${pointsDays[userProject].max / 86400000} день</th>`
//       tableBodyPoints.rows[1].insertCell().innerText = info.depAmount
//       // tableBodyPoints.rows[0].insertCell().innerText = `${pointsStatuses[userProject].prem.name} | ${pointsStatuses[userProject].prem.max}`
//     // tableBodyPoints.rows[0].insertCell().innerText = `${pointsStatuses[userProject].vip.name} | ${pointsStatuses[userProject].vip.max}`
//     loaderDivPoints.remove()
//     })
//   })
// }

// detailsPoints.append(divPointsCheking)
// document.querySelector('#sidebar').prepend(divPersonalDep)
document.querySelector('#sidebar').prepend(divBDDeps)
document.querySelector('#sidebar').prepend(divMotivationBD)
document.querySelector('#sidebar').prepend(divCashbackLiveCb)
document.querySelector('#sidebar').prepend(divCashbackCheking)
document.querySelector('#sidebar').prepend(divSportBonus)
document.querySelector('#sidebar').prepend(divBezdepChecking)
document.querySelector('#sidebar').prepend(divNewLoyal)


  // if (isContain(window.location.href, projectsDynamicStatuses)) {
  //     document.querySelectorAll('.panel')[0].after(divPointsCheking)  
  // }
}

//-------------------------------------------------SINGL PAYMENTS PAGES----------------------------------------------------
if (/payments\/\d+/g.test(window.location.href)) {

  let h3 = document.getElementsByTagName('h3')[0]
  let paySystem = document.querySelector('.row-payment_system td').firstChild.data
  let payLink = window.location.href
  let payAmount = document.querySelector('.row-amount td').innerText
  let payUser = document.querySelector('.row-user td a').innerText
  let a = document.createElement('a')
  a.innerText = 'Create ticket'
  a.style.float = 'right'
  a.setAttribute('target', '_blank')
  a.onclick = () => {
    storageData = 'test'
    chrome.storage.local.set({
      paySystem: paySystem,
      payLink: payLink,
      payAmount: payAmount,
      payUser: payUser    
    })
  }

  if (document.querySelector('#page_title').innerText == 'Cashout') {
      a.href = 'https://supdeskt.atlassian.net/servicedesk/customer/portal/1/group/1/create/34'
    }
  if (document.querySelector('#page_title').innerText == 'Deposit') {    
      a.href = 'https://supdeskt.atlassian.net/servicedesk/customer/portal/1/group/1/create/33'
    } 
  h3.appendChild(a)
}
//----------------------------------------------------------------------------------------------------------------------------

if (/payments\?/g.test(window.location.href)) { //--------------------------ALL PAYMENTS

//-----------------------------------

  let amounts = document.getElementsByClassName('index_table index')[1].querySelectorAll('tr > td:nth-child(3)')
  let actions = document.getElementsByClassName('index_table index')[1].querySelectorAll('tr > td:nth-child(5)')
  let finaldate = document.getElementsByClassName('index_table index')[1].querySelectorAll('tr > td:nth-child(11)')
  let form = document.getElementById('filters_sidebar_section')
  let divTotal = document.createElement('div')
  let bonusInfo =document.createElement('div')
  let operationsTable = document.createElement('table')
  let lastOpeartion = ''
  let currency = amounts[0].innerText.substring(amounts[0].innerText.length - 3)
  localStorage.setItem('lastDrawalDate', '2000-01-01 00:00:00')


  // let url = '<a href="https://' + window.location.href.split('/')[2] + '/admin/bets?q[account_user_id_eq]='+ userid +'&q[created_at_gteq]=' + finaldate.innerText + ' target="_blank">' + finaldate.innerText + '</a>'

  //-Adding link to date-
  
  for (i = (finaldate.length - 1); i >= 0; i--) {
    finaldate[i].innerHTML = '<a href="https://' + window.location.href.split('/')[2] + '/admin/bets?q[account_user_id_eq]=' + localStorage.getItem('curruserid') + '&q[created_at_gteq]=' + finaldate[i].innerText + '" target="_blank">' + finaldate[i].innerText + '</a>'
    if (actions[i].innerText == 'Выплата') {
      localStorage.setItem('lastDrawalDate', finaldate[i].innerText)
      localStorage.setItem('lastDrawalLink', finaldate[i].innerHTML)
    }
  }

  let sum = 0 
  for (i = 0; i <= (actions.length - 1); i++) {
    if (actions[i].innerText == 'Депозит') {
      if ((finaldate[i].innerText >= localStorage.getItem('lastBezdepDate')) && (finaldate[i].innerText >= localStorage.getItem('lastCashbackDate'))) {
        sum = sum + parseFloat(amounts[i].innerText.replaceAll(/\s/g, '').replaceAll(/,/g,'.'))
        // console.log(parseFloat(amounts[i].innerText.replaceAll(/\s/g, '').replaceAll(/,/g,'.')), sum)
      } else {
          actions[i].parentElement.childNodes.forEach(node => {
          node.style = 'background-color: #f7caca;'
        })
        break
      }      
    } else {
        localStorage.setItem('lastDrawalDate', finaldate[i].innerText)
        actions[i].parentElement.childNodes.forEach(node => {
        node.style = 'background-color: #f7caca;'
      })
      break
    }
  }

  if (localStorage.getItem('lastBezdepDate') >= localStorage.getItem('lastCashbackDate') && 
      localStorage.getItem('lastBezdepDate') >= localStorage.getItem('lastDrawalDate')) lastOpeartion = 'bezdep' 
      else if (localStorage.getItem('lastCashbackDate') >= localStorage.getItem('lastDrawalDate')) lastOpeartion = 'cashback'
      else lastOpeartion = 'withdrawal'

  // console.log(sum)

  if (isContain(window.location.href, projectsSegments)) {
    if (sum == 0) {
      bonusInfo.style.backgroundColor = 'indianred'
      if (lastOpeartion == 'cashback') 
      bonusInfo.innerText = 'Спасибо за ожидание. На данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения кешбека. Напомню, что сумма ваших депозитов должна быть не менее '+ minAmountSegment[currency].amount +' ' + minAmountSegment[currency].name +'.'
      else if (lastOpeartion == 'bezdep') 
      bonusInfo.innerText = 'Спасибо за ожидание. На данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения последнего бездепозитного предложения. Напомню, что сумма ваших депозитов должна быть не менее '+ minAmountSegment[currency].amount +' ' + minAmountSegment[currency].name +'.'
      else bonusInfo.innerText = 'Спасибо за ожидание. На данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после выплаты. Напомню, что сумма ваших депозитов должна быть не менее '+ minAmountSegment[currency].amount +' ' + minAmountSegment[currency].name +'.'
    } else if (minAmountSegment[currency].amount > sum) {
      bonusInfo.style.backgroundColor = 'indianred'
      if (lastOpeartion == 'cashback') 
      bonusInfo.innerText = 'Спасибо за ожидание. Пока что персональный бездепозитный бонус вам недоступен, потому что после получения кешбека вы не внесли депозитов на сумму ' + minAmountSegment[currency].amount +' ' + minAmountSegment[currency].name + '. Сейчас сумма ваших пополнений составляет ' + sum + ' ' + minAmountSegment[currency].name + '.'
      else if (lastOpeartion == 'bezdep') 
      bonusInfo.innerText = 'Спасибо за ожидание. Пока что персональный бездепозитный бонус вам недоступен, потому что после зачисления последнего персонального предложения вы не внесли депозитов на сумму ' + minAmountSegment[currency].amount +' ' + minAmountSegment[currency].name + '. Сейчас сумма ваших пополнений составляет ' + sum + ' ' + minAmountSegment[currency].name + '.'
      else bonusInfo.innerText = 'Спасибо за ожидание. Пока что персональный бездепозитный бонус вам недоступен, потому что после вывода денежных средств вы не внесли депозитов на сумму ' + minAmountSegment[currency].amount +' ' + minAmountSegment[currency].name + '. Сейчас сумма ваших пополнений составляет ' + sum + ' ' + minAmountSegment[currency].name + '.'
    } else if (minAmountOld[currency].amount <= sum) {
      bonusInfo.style.backgroundColor = 'darkseagreen'
      if (lastOpeartion == 'cashback') 
      bonusInfo.innerHTML = localStorage.getItem('lastCashbackLink') 
      else if (lastOpeartion == 'bezdep') 
      bonusInfo.innerHTML = localStorage.getItem('lastBezdepLink')
      else bonusInfo.innerHTML = localStorage.getItem('lastDrawalLink')
    }
  }

  if (isContain(window.location.href, projectsOld)) {
    // console.log('IS CONTAIN TRUE')
    if (sum == 0) {
      bonusInfo.style.backgroundColor = 'indianred'
      if (lastOpeartion == 'cashback') 
      bonusInfo.innerText = 'Спасибо за ожидание. На данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения кешбека. Напомню, что сумма ваших депозитов должна быть не менее '+ minAmountOld[currency].amount +' ' + minAmountOld[currency].name +'.'
      else if (lastOpeartion == 'bezdep') 
      bonusInfo.innerText = 'Спасибо за ожидание. На данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после получения последнего бездепозитного предложения. Напомню, что сумма ваших депозитов должна быть не менее '+ minAmountOld[currency].amount +' ' + minAmountOld[currency].name +'.'
      else bonusInfo.innerText = 'Спасибо за ожидание. На данный момент не могу предложить вам персональный бонус, так как вы не совершали пополнений после выплаты. Напомню, что сумма ваших депозитов должна быть не менее '+ minAmountOld[currency].amount +' ' + minAmountOld[currency].name +'.'
    } else if (minAmountSegment[currency].amount > sum) {
      bonusInfo.style.backgroundColor = 'indianred'
      if (lastOpeartion == 'cashback') 
      bonusInfo.innerText = 'Спасибо за ожидание. Пока что персональный бездепозитный бонус вам недоступен, потому что после получения кешбека вы не внесли депозитов на сумму ' + minAmountOld[currency].amount +' ' + minAmountOld[currency].name + '. Сейчас сумма ваших пополнений составляет ' + sum + ' ' + minAmountOld[currency].name + '.'
      else if (lastOpeartion == 'bezdep') 
      bonusInfo.innerText = 'Спасибо за ожидание. Пока что персональный бездепозитный бонус вам недоступен, потому что после зачисления последнего персонального предложения вы не внесли депозитов на сумму ' + minAmountOld[currency].amount +' ' + minAmountOld[currency].name + '. Сейчас сумма ваших пополнений составляет ' + sum + ' ' + minAmountOld[currency].name + '.'
      else bonusInfo.innerText = 'Спасибо за ожидание. Пока что персональный бездепозитный бонус вам недоступен, потому что после вывода денежных средств вы не внесли депозитов на сумму ' + minAmountOld[currency].amount +' ' + minAmountOld[currency].name + '. Сейчас сумма ваших пополнений составляет ' + sum + ' ' + minAmountOld[currency].name + '.'
    } else if (minAmountOld[currency].amount <= sum) {
      bonusInfo.style.backgroundColor = 'darkseagreen'
      if (lastOpeartion == 'cashback') 
      bonusInfo.innerHTML = localStorage.getItem('lastCashbackLink') 
      else if (lastOpeartion == 'bezdep') 
      bonusInfo.innerHTML = localStorage.getItem('lastBezdepLink')
      else bonusInfo.innerHTML = localStorage.getItem('lastDrawalLink')
    }
  }

  let divSum = document.createElement('div')
  if(lastOpeartion == 'cashback')
    divSum.innerText = 'С момента получения последнего кешбека сумма депозитов составляет ' + sum + ' ' + currency
  else if (lastOpeartion == 'bezdep')
  divSum.innerText = 'С момента получения последнего бездепозитного бонуса сумма депозитов составляет ' + sum + ' ' + currency
  else divSum.innerText = 'С момента последней выплаты сумма депозитов составляет ' + sum + ' ' + currency
  
  
  
  operationsTable.insertRow(-1).insertCell(-1)
  operationsTable.rows[0].insertCell(-1)
  operationsTable.insertRow(-1).insertCell(-1)
  operationsTable.rows[1].insertCell(-1)
  operationsTable.insertRow(-1).insertCell(-1)
  operationsTable.rows[2].insertCell(-1)
  
  
  operationsTable.rows[0].cells[0].innerText = localStorage.getItem('lastBezdepName')
  operationsTable.rows[0].cells[1].innerText = localStorage.getItem('lastBezdepDate')
  operationsTable.rows[1].cells[0].innerText = localStorage.getItem('lastCashbackOrDep')
  operationsTable.rows[1].cells[1].innerText = localStorage.getItem('lastCashbackDate')
  operationsTable.rows[2].cells[0].innerText = 'Last Drawal'
  operationsTable.rows[2].cells[1].innerText = localStorage.getItem('lastDrawalDate')

  bonusInfo.classList.add("player-tag")
  bonusInfo.style.display = 'block'
  //bonusInfo.style.backgroundColor = 'cornflowerblue'
  // bonusInfo.style.padding = 'inherit'
  bonusInfo.style.margin = '5px'
  bonusInfo.style.textAlign = 'center'
  bonusInfo.style.cursor = 'pointer'
  bonusInfo.onclick = function () {
    navigator.clipboard.writeText(bonusInfo.innerText)
  }

  form.before(divTotal)
  divTotal.appendChild(operationsTable)
  divTotal.appendChild(bonusInfo)
  bonusInfo.before(divSum)
  
  
  // divTotal.innerText = 'Сумма депозитов с момента последней выплаты: ' + sum + '\n' + localStorage.getItem('lastBezdepName') + '\n ' +
  //                   + ' ' + localStorage.getItem('lastBezdepDate') + '\n' + 'LAST CASHBACK' + '\n' + localStorage.getItem('lastCashbackDate') + ' \n' +
  //                   + 'Last winthdrawal\n' + localStorage.getItem('lastDrawalDate') + '\n' + lastOpeartion
  divTotal.style.cssText = 'text-align: center; margin: 25px -15px -15px -15px; padding: 15px'

  
  //-------------------------single payment






  
}

//-------------------------------------------------BETS PAGE----------------------------------------------------


//AVG
if (/bets\?q/g.test(window.location.href)) {
  let elAVG = document.getElementById('aggregated_data_sidebar_section')
  let currency = document.getElementsByClassName('col col-valyuta')[1].innerHTML
  let avg = 0
  let project = window.location.href.split('.')[2]
  if (isContain(project, projectsSegments)) project = 'segmentsProj'
  if (currency == 'CAD') currency = 'USD'

    let bets = document.getElementsByClassName('col col-bets')[1].innerHTML
    let cnt = document.getElementsByClassName('col col-cnt')[1].innerHTML

    let divAVG = document.createElement('div')
    let divBonusName = document.createElement('div')
    let divBonusText = document.createElement('div')

    elAVG.appendChild(divAVG) //add new block for AVG info
    elAVG.appendChild(divBonusName)
    elAVG.appendChild(divBonusText) //add new block for Bunus Text

    avg = (parseFloat(bets) / parseFloat(cnt)).toFixed(2) // calculate AVG




     getBonusInfo(project, currency, avg).then((bonus) => {
       //CSS for divAVG
    divAVG.classList.add("player-tag")
    divAVG.style.display = 'block'
    divAVG.style.backgroundColor = 'cornflowerblue'
    divAVG.style.padding = 'inherit'
    divAVG.style.textAlign = 'center'
    divAVG.style.fontSize = '25px'
    divAVG.style.lineHeight = '35px'
    divAVG.style.margin = 'inherit'

    divBonusName.classList.add("player-tag")
    divBonusName.classList.add('table_tools_button')
    divBonusName.style.display = 'block'
    divBonusName.style.backgroundColor = 'cornflowerblue'
    divBonusName.style.padding = 'inherit'
    divBonusName.style.margin = 'inherit'
    divBonusName.style.textAlign = 'center'
    divBonusName.style.fontSize = '15px'
    divBonusName.style.lineHeight = '20px'
    divBonusName.style.cursor = 'pointer'
    divBonusName.onclick = function () {
      navigator.clipboard.writeText(bonus.bonusName)
    }

    divBonusText.classList.add("player-tag")
    divBonusText.style.display = 'block'
    divBonusText.style.backgroundColor = 'cornflowerblue'
    divBonusText.style.padding = 'inherit'
    divBonusText.style.margin = 'inherit'
    divBonusText.style.textAlign = 'center'
    divBonusText.style.cursor = 'pointer'
    divBonusText.onclick = function () {
      navigator.clipboard.writeText(bonus.bonusInfo)
    }

    divAVG.innerHTML = 'AVG: ' + avg
    divBonusName.innerHTML = bonus.bonusName
    divBonusText.innerHTML = bonus.bonusInfo
     })
}




//Total from Withdrawar
if (window.location.href.includes('payments?')) {
  const elTotal = document.getElementsByClassName('panel_contents')[0]
  let amounts = document.getElementsByClassName('col col-amount')
  let actions = document.getElementsByClassName('col col-action')

  // try {
  //   if ((elTotal.firstChild.getAttribute('action') == '/admin/payments') && (elTotal)) { //cheking the payment page
  //       let divTotal = document.createElement('div')
  //       elTotal.appendChild(divTotal) // add new block for amount 

  //       let sum = 0
  //       console.log(actions)
  //       for (let i=1; i<=(actions.length - 1); i++) {
  //           if (actions[i].innerHTML == 'Депозит') { //if deposit 
  //               sum = sum + parseFloat(amounts[i].innerHTML.replaceAll(/\s/g,'')) //delete spaces
  //           } 
  //           else {
  //             actions[i].parentNode.childNodes.forEach(function(node){ // filling all row
  //             node.style = 'background-color: #f7caca;'
  //             })
  //             break
  //           }
  //       }
  //       divTotal.innerHTML = 'С момента последней выплаты сумма депозитов составляет: \n' + sum
  //       divTotal.style.cssText =    `text-align: center; 
  //                                   margin: 25px -15px -15px -15px; 
  //                                   padding: 15px`
  //   }
  // } catch (error) {
  //   console.log(error)
  // }

  //Select all data on table page and copy
  const elCopy = document.getElementsByClassName('table_tools_segmented_control scope-default-group')

  try {
    if (elCopy) {
      let liCopy = document.createElement('li')
      elCopy[0].appendChild(liCopy)

      let a = document.createElement('a')
      liCopy.appendChild(a)
      a.className = 'table_tools_button'
      a.href = 'javascript:void(0)'
      a.innerHTML = 'Копировать'
      a.addEventListener("click", copy, false)
    }

    let table = document.getElementsByTagName('tbody')
    ttext = table[0].textContent
    function copy() {
      let tr = document.getElementsByClassName('index_table index')[1].querySelectorAll('tr')
      if (document.createRange) { //cheking for supported method
        let rng = document.createRange()
        rng.setStart(tr[1], 0)
        rng.setEndAfter(tr[tr.length - 1])
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng)
      }
      let copyTable = sel.toString()
      navigator.clipboard.writeText(copyTable.replaceAll(/\nО/g, 'О'))
    }
  } catch (error) {
    console.log(error)
  }
}



//----------------------------HELP DESK 
if ((window.location.href == 'https://supdeskt.atlassian.net/servicedesk/customer/portal/1/group/1/create/33') || 
    (window.location.href == 'https://supdeskt.atlassian.net/servicedesk/customer/portal/1/group/1/create/34')) {
      window.onload = () => {
        let paySystem = document.querySelector("#customfield_10071")
        let payLink = document.querySelector("#customfield_10069")
        let payAmount = document.querySelector("#customfield_10070")
        let payUser = document.querySelector("#summary")

        chrome.storage.local.get(['paySystem', 'payLink', 'payAmount', 'payUser']).then(
          (storage) => {
            // console.log(storage)
            paySystem.value = storage.paySystem
            payLink.value = storage.payLink
            payAmount.value = storage.payAmount
            payUser.value = storage.payUser

          })

        console.log('TICKET PAGE')
        let script = document.createElement('script')
        script.src = chrome.runtime.getURL('/scripts/tickets.js')
        document.body.append(script)
      }
}


//--------------------shitty Live Chat

if (window.location.href.includes('https://support-admin-master.chat.cc.local')) {
  if (window.location.href.includes('chats') || window.location.href.includes('archives')) {
    let obsChatList, chatList, emailNode, groupNode, project
    let timer = setInterval(() => {
      chatList = document.querySelector('#info-list')
      emailNode = document.querySelector('#info-list .el-card__body .vac-text-last .vac-text-ellipsis')
      groupNode = document.querySelectorAll('#info-list .el-card__body')[1]
      if (chatList !== null && emailNode !== null && groupNode !== null) {
        groupNode.querySelector('.detail-value')
        clearInterval(timer)
        createLink()
        obsChatList = new MutationObserver(createLink)
            obsChatList.observe(chatList, {
            subtree: true,
            attributes: true,
            characterData: true
        })
      } //else console.log('miss')
    }, 1000)
    
    function createLink() {
      // console.log('get')
      emailNode = document.querySelector('#info-list .el-card__body .vac-text-last .vac-text-ellipsis')
      // console.log(emailNode.innerText)
      groupNode = document.querySelectorAll('#info-list .el-card__body')[1]
      if (groupNode.innerText.includes('ROX')) project = 'rox'
      if (groupNode.innerText.includes('JET')) project = 'jet'
      if (groupNode.innerText.includes('VOLNA')) project = 'volna'
      if (groupNode.innerText.includes('DRIP')) project = 'drip'
      if (groupNode.innerText.includes('LEGZO')) project = 'legzo'
      if (groupNode.innerText.includes('IZZI')) project = 'izzi'
      if (groupNode.innerText.includes('MONRO')) project = 'monro'
      if (groupNode.innerText.includes('FRESH')) project = 'fresh'
      if (groupNode.innerText.includes('STARDA')) project = 'starda'
	  if (groupNode.innerText.includes('LEX')) project = 'lex'
      if (groupNode.innerText.includes('SOL')) project = 'sol'
      if (groupNode.innerText.includes('GIZBO')) project = 'gizbo'
		if (groupNode.innerText.includes('IRWIN')) project = 'irwin'
      let fullLink = `https://admin.crimson.${project}.prd.maxbit.private/admin/players?q[email_contains]=${emailNode.innerText}&commit=Фильтроват&order=id_desc`
      if (emailNode.innerText != '') {
        emailNode.innerHTML = `<a href="${fullLink}" target="_blank">${emailNode.innerText}</a>`
        emailNode.style.textDecoration = 'underline'
      }
    }
  }
}

//addinng new message red circle
if (window.location.href.includes('https://support-admin-master.chat.cc.local')) {
  let chatsCount = 0
  let chatsList
  let timer = setInterval(() => {
  if (window.location.href.includes('chats')) {
      chatsList = document.querySelectorAll('#rooms-list .vac-room-item')
      if (chatsList) {
        chatsList.forEach((chat) => {
          if (chat.querySelector('.vac-text-last').innerText.includes('Pe:') || chat.querySelector('.vac-text-last').innerText.includes('left the')) {
            if (chat.querySelector('.emoji-room-name .circle')) chat.querySelector('.emoji-room-name .circle').remove()
          } else if (chat.querySelector('.emoji-room-name .circle')) {
            // console.log('Already have')
          } else {
            // let spanNewMsg = document.createElement('span')
            // spanNewMsg.classList.add('circle')
            // chat.querySelector('.emoji-room-name').append(spanNewMsg)
            if (document.hidden) chrome.runtime.sendMessage({ action: 'notifmsg'}, () => true) 
            else console.log('i tak vidno message')
            chat.querySelector('.emoji-room-name').insertAdjacentHTML('beforeend', `<span class="circle"></span>`)
            // chat.insertAdjacentHTML('beforeend', `<span class="circle"></span>`)
          } 
        })
        if (chatsCount < chatsList.length && chatsList.length != 0) {
          if (document.hidden) {
            chrome.runtime.sendMessage({ action: 'notif'}, () => true)
            chatsCount = chatsList.length
          } else {
            console.log('i tak vidno')
            chatsCount = chatsList.length
          }            
        } else chatsCount = chatsList.length
      }
      console.log(`'working' + chats: ${chatsList.length} + count: ${chatsCount}`)
    }
  }, 1000)
}
// Предполагаем, что у вас уже есть JSON-объект
let jsonData = {
  "table_data": [0, 1, 2
      // ... (существующие данные)
  ],
  // ... (другие свойства)
};

// Создаем новые объекты для добавления в таблицу
let newRow1 = {
  "Kolichestvo": Number(newSegmentBonusCount[status_tag]) + Number(NewSegmentBonusDepCount[status_tag])
};

let newRow2 = {
  "Bezdep": Number(bonusesIssue.monroCount)
};

let newRow3 = {
  "Dep": Number(bonusesIssue.monroCount)
};

// Добавляем новые строки в массив table_data
jsonData.table_data.push(newRow1, newRow2, newRow3);

// Теперь jsonData содержит новые данные
console.log(jsonData);

//notif
// if (window.location.href.includes('https://support-admin-master.chat.cc.local')) {
//   if (window.location.href.includes('chats')) {
//     let chatsCount = 0
//     let messagesCount = 0
//     let timer = setInterval( () => {
//       let chatList = document.querySelectorAll('#rooms-list .vac-room-item')
//       if (chatList) {
//         if (chatsCount != chatList.length && chatList.length != 0) {
//           chrome.runtime.sendMessage({ action: 'notif'}, () => true)
//           chatsCount = chatList.length
//         } else if (chatList.length == 0) chatsCount = 0
//       } else console.log('no finded')

//       let messageList = document.querySelectorAll('#messages-list .messages-list [id] .vac-message-box')
//       if (messageList) {
//         if (messagesCount != messageList.length) {
//           if (!messageList[messageList.length - 1].classList.contains('vac-offset-current')) {
//             chrome.runtime.sendMessage({ action: 'notifmsg'}, () => true)
//             console.log('new message')
//             messagesCount = messageList.length
//           }
//           // if (messageList[messageList.length - 1].querySelector('.vac-text-username') != null &&
//           // !messageList[messageList.length - 1].querySelector('.vac-text-username').innerText.includes('Personal Manager')) {
//           //   chrome.runtime.sendMessage({ action: 'notif'}, () => true)
//           //   messagesCount = messageList.length
//           // }
//           // console.log(messageList.length)
//         }
//       }

//       console.log('working...')


//     }, 1000)
//   }
// }

//////////////////////////////////////////////////////////////////// Miss Chats///////////////////////////////////////////////////////////////////
///if (window.location.href.includes('my.livechatinc.com')) {
///  let chats = {};
///
///  function getChatAuthor(messageElement) {
///    if (messageElement.classList.contains('css-1a1ofi2')) {
///      return 'operator';
///    } else if (messageElement.classList.contains('css-1cik5ig')) {
///      return 'player';
///    }
///    return null;
///  }
///
///  function checkChats() {
///    const now = Date.now();
///    const chatList = document.querySelectorAll('.css-1rx2rn9'); // Получаем все чаты с классом .css-1rx2rn9
///    const lastChat = chatList[chatList.length - 1]; // Получаем последний чат
///
///    if (lastChat) {
///      const chatId = lastChat.dataset.chatId; // Предполагаем, что у чата есть атрибут data-chat-id
///      const messages = lastChat.querySelectorAll('.css-1cik5ig, .css-1a1ofi2'); // Сообщения игрока и менеджера
///
///      messages.forEach(message => {
///        const author = getChatAuthor(message);
///        const messageTime = message.dataset.timestamp; // Предполагаем, что у сообщения есть атрибут data-timestamp
///
///        if (!chats[chatId]) {
///          chats[chatId] = {
///            firstMessageTime: messageTime,
///            lastResponseTime: null,
///            userLeft: false
///          };
///        }
///
///        const chatData = chats[chatId];
///        const messageTimestamp = parseInt(messageTime, 10);
///
///        if (author === 'operator') {
///          chatData.lastResponseTime = messageTime;
///        } else if (author === 'player') {
///          if (now - messageTimestamp > 180000 && !chatData.lastResponseTime) { // 3 минуты (180000 миллисекунд)
///            chatData.userLeft = true;
///            console.log(`Пропущенный чат (3 минуты): ${chatId}`);
///            // Здесь можно добавить код для уведомления или других действий
///          } else if (now - chatData.firstMessageTime > 90000 && !chatData.lastResponseTime) { // 90 секунд (90000 миллисекунд)
///            chatData.userLeft = true;
///            console.log(`Пропущенный чат (90 секунд): ${chatId}`);
///            // Здесь можно добавить код для уведомления или других действий
///          }
///        }
///      });
///    }
///  }
///
///  setInterval(checkChats, 1000); // Проверять каждую секунду
///}