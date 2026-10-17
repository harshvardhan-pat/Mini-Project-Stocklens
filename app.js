// ================= DATA =================
const USDINR = 83.82;
const CHART_COLORS = ['#0F172A','#2563EB','#059669','#D97706','#7C3AED','#DB2777','#0891B2','#65A30D','#EA580C','#475569'];
const STOCKS_DB = [
  {ticker:'RELIANCE.NS', name:'Reliance Industries', exchange:'NSE', sector:'Energy • Conglomerate', currency:'INR', price:1210, prevClose:1223.33, pe:28.4, eps:105.54, mcapCr:2028500, volume:6245000, avgVolume:5820000, high:3217.60, low:2220.30, divYield:0.90, beta:0.89, logoBg:'#0F172A'},
  {ticker:'TCS.NS', name:'Tata Consultancy Services', exchange:'NSE', sector:'IT Services', currency:'INR', price:2463, prevClose:2354.42, pe:30.2, eps:136.60, mcapCr:1493400, volume:1842000, avgVolume:2150000, high:4592.25, low:3311.00, divYield:1.52, beta:0.62, logoBg:'#B45309'},
  {ticker:'INFY', name:'Infosys', exchange:'NSE', sector:'IT Services', currency:'INR', price:1161.6, prevClose:1111.06, pe:24.8, eps:75.58, mcapCr:778400, volume:8420000, avgVolume:7100000, high:2151.10, low:1358.20, divYield:1.95, beta:0.74, logoBg:'#0E7490'},
  {ticker:'HDFCBANK.NS', name:'HDFC Bank', exchange:'NSE', sector:'Banking', currency:'INR', price:728.1, prevClose:728.54, pe:19.4, eps:84.65, mcapCr:1256800, volume:12140000, avgVolume:10500000, high:1757.50, low:1363.45, divYield:1.18, beta:1.02, logoBg:'#B91C1C'},
  {ticker:'ICICIBANK.NS', name:'ICICI Bank', exchange:'NSE', sector:'Banking', currency:'INR', price:1396.8, prevClose:1394.99, pe:18.9, eps:66.08, mcapCr:879300, volume:9850000, avgVolume:8900000, high:1311.05, low:1002.30, divYield:0.80, beta:1.18, logoBg:'#EA580C'},
  {ticker:'SBIN.NS', name:'State Bank of India', exchange:'NSE', sector:'Banking', currency:'INR', price:961.7, prevClose:961.51, pe:11.2, eps:74.66, mcapCr:746200, volume:18500000, avgVolume:16200000, high:912.00, low:543.15, divYield:1.63, beta:1.32, logoBg:'#1D4ED8'},
  {ticker:'TATAMOTORS.NS', name:'Tata Motors', exchange:'NSE', sector:'Auto • EV', currency:'INR', price:286.85, prevClose:287.05, pe:17.2, eps:56.13, mcapCr:356800, volume:14200000, avgVolume:12800000, high:1065.60, low:612.80, divYield:0.32, beta:1.45, logoBg:'#334155'},
  {ticker:'WIPRO.NS', name:'Wipro', exchange:'NSE', sector:'IT Services', currency:'INR', price:184.4, prevClose:174.03, pe:21.8, eps:24.90, mcapCr:283500, volume:7200000, avgVolume:6800000, high:614.35, low:375.10, divYield:1.10, beta:0.68, logoBg:'#0F766E'},
  {ticker:'AXISBANK.NS', name:'Axis Bank', exchange:'NSE', sector:'Banking', currency:'INR', price:1286.45, prevClose:1288.51, pe:13.8, eps:85.83, mcapCr:367000, volume:6900000, avgVolume:6200000, high:1339.65, low:934.40, divYield:0.10, beta:1.18, logoBg:'#7F1D1D'},
  {ticker:'KOTAKBANK.NS', name:'Kotak Mahindra Bank', exchange:'NSE', sector:'Banking', currency:'INR', price:446, prevClose:448.83, pe:18.1, eps:98.46, mcapCr:354000, volume:2450000, avgVolume:2300000, high:1942.00, low:1543.85, divYield:0.08, beta:0.91, logoBg:'#B91C1C'},
  {ticker:'BAJFINANCE.NS', name:'Bajaj Finance', exchange:'NSE', sector:'Finance', currency:'INR', price:981.9, prevClose:968.53, pe:31.5, eps:229.99, mcapCr:448000, volume:1850000, avgVolume:1600000, high:8192.00, low:6187.80, divYield:0.50, beta:1.42, logoBg:'#1D4ED8'},
  {ticker:'BAJAJFINSV.NS', name:'Bajaj Finserv', exchange:'NSE', sector:'Finance', currency:'INR', price:1737, prevClose:1747.3, pe:32.0, eps:52.56, mcapCr:268000, volume:1250000, avgVolume:1100000, high:2029.00, low:1419.00, divYield:0.06, beta:1.25, logoBg:'#1E40AF'},
  {ticker:'HCLTECH.NS', name:'HCL Technologies', exchange:'NSE', sector:'IT Services', currency:'INR', price:1378, prevClose:1358.97, pe:26.2, eps:62.79, mcapCr:445000, volume:2100000, avgVolume:1950000, high:2012.20, low:1235.00, divYield:3.10, beta:0.72, logoBg:'#2563EB'},
  {ticker:'TECHM.NS', name:'Tech Mahindra', exchange:'NSE', sector:'IT Services', currency:'INR', price:1790, prevClose:1649.1, pe:48.0, eps:35.00, mcapCr:164000, volume:1450000, avgVolume:1300000, high:1807.70, low:1162.00, divYield:2.10, beta:1.10, logoBg:'#0F766E'},
  {ticker:'MARUTI.NS', name:'Maruti Suzuki India', exchange:'NSE', sector:'Automotive', currency:'INR', price:11482, prevClose:11458, pe:27.5, eps:452.73, mcapCr:391000, volume:520000, avgVolume:480000, high:13680.00, low:10250.00, divYield:1.00, beta:0.78, logoBg:'#1D4ED8'},
  {ticker:'M&M.NS', name:'Mahindra & Mahindra', exchange:'NSE', sector:'Automotive', currency:'INR', price:2920, prevClose:2852.1, pe:30.4, eps:98.03, mcapCr:369000, volume:1850000, avgVolume:1650000, high:3276.00, low:1575.00, divYield:0.70, beta:1.20, logoBg:'#B91C1C'},
  {ticker:'BAJAJ-AUTO.NS', name:'Bajaj Auto', exchange:'NSE', sector:'Automotive', currency:'INR', price:10405, prevClose:10385, pe:29.2, eps:313.36, mcapCr:254000, volume:210000, avgVolume:195000, high:12774.00, low:7400.00, divYield:1.70, beta:0.82, logoBg:'#1E3A8A'},
  {ticker:'ITC.NS', name:'ITC', exchange:'NSE', sector:'FMCG', currency:'INR', price:263, prevClose:264.75, pe:27.0, eps:16.22, mcapCr:548000, volume:8200000, avgVolume:7600000, high:499.60, low:399.35, divYield:3.20, beta:0.58, logoBg:'#166534'},
  {ticker:'HINDUNILVR.NS', name:'Hindustan Unilever', exchange:'NSE', sector:'FMCG', currency:'INR', price:1898, prevClose:1894.21, pe:52.0, eps:47.31, mcapCr:577000, volume:1100000, avgVolume:950000, high:3035.00, low:2172.00, divYield:1.60, beta:0.48, logoBg:'#1D4ED8'},
  {ticker:'NESTLEIND.NS', name:'Nestle India', exchange:'NSE', sector:'FMCG', currency:'INR', price:1265.5, prevClose:1275.8, pe:68.0, eps:32.94, mcapCr:216000, volume:180000, avgVolume:165000, high:2770.00, low:2145.00, divYield:1.10, beta:0.42, logoBg:'#991B1B'},
  {ticker:'SUNPHARMA.NS', name:'Sun Pharmaceutical', exchange:'NSE', sector:'Pharma', currency:'INR', price:1760, prevClose:1762.64, pe:36.5, eps:48.77, mcapCr:427000, volume:1900000, avgVolume:1700000, high:1960.00, low:1345.00, divYield:0.80, beta:0.55, logoBg:'#7C3AED'},
  {ticker:'CIPLA.NS', name:'Cipla', exchange:'NSE', sector:'Pharma', currency:'INR', price:1325.1, prevClose:1328, pe:29.1, eps:51.89, mcapCr:122000, volume:950000, avgVolume:850000, high:1702.00, low:1180.00, divYield:0.80, beta:0.60, logoBg:'#047857'},
  {ticker:'DRREDDY.NS', name:"Dr. Reddy's Laboratories", exchange:'NSE', sector:'Pharma', currency:'INR', price:1231, prevClose:1221.2, pe:19.5, eps:64.62, mcapCr:105000, volume:620000, avgVolume:570000, high:1421.00, low:1110.00, divYield:0.70, beta:0.48, logoBg:'#0E7490'},
  {ticker:'NTPC.NS', name:'NTPC', exchange:'NSE', sector:'Energy • Utilities', currency:'INR', price:316.5, prevClose:315.8, pe:16.2, eps:21.91, mcapCr:344000, volume:7800000, avgVolume:7000000, high:448.45, low:292.00, divYield:2.00, beta:0.78, logoBg:'#B45309'},
  {ticker:'POWERGRID.NS', name:'Power Grid Corporation', exchange:'NSE', sector:'Energy • Utilities', currency:'INR', price:250.95, prevClose:251.05, pe:18.8, eps:16.76, mcapCr:293000, volume:4800000, avgVolume:4300000, high:366.25, low:247.30, divYield:3.50, beta:0.62, logoBg:'#1D4ED8'},
  {ticker:'ONGC.NS', name:'Oil and Natural Gas Corporation', exchange:'NSE', sector:'Energy', currency:'INR', price:223.87, prevClose:224.64, pe:7.2, eps:38.61, mcapCr:349000, volume:9800000, avgVolume:9100000, high:345.00, low:205.00, divYield:4.20, beta:0.92, logoBg:'#0F766E'},
  {ticker:'TATASTEEL.NS', name:'Tata Steel', exchange:'NSE', sector:'Metals', currency:'INR', price:175.5, prevClose:176.4, pe:28.0, eps:5.64, mcapCr:197000, volume:16500000, avgVolume:15000000, high:184.60, low:122.60, divYield:2.10, beta:1.30, logoBg:'#334155'},
  {ticker:'JSWSTEEL.NS', name:'JSW Steel', exchange:'NSE', sector:'Metals', currency:'INR', price:1228.5, prevClose:1200.4, pe:34.5, eps:28.55, mcapCr:240000, volume:1300000, avgVolume:1200000, high:1063.00, low:723.00, divYield:0.80, beta:1.18, logoBg:'#1D4ED8'},
  {ticker:'ADANIGREEN.NS', name:'Adani Green Energy', exchange:'NSE', sector:'Energy • Renewables', currency:'INR', price:1302, prevClose:1288, pe:95.0, eps:11.37, mcapCr:171000, volume:780000, avgVolume:710000, high:2173.00, low:870.00, divYield:0.00, beta:1.75, logoBg:'#15803D'},
  {ticker:'COALINDIA.NS', name:'Coal India', exchange:'NSE', sector:'Energy • Mining', currency:'INR', price:417.2, prevClose:418, pe:7.8, eps:54.49, mcapCr:262000, volume:5400000, avgVolume:4900000, high:543.00, low:342.00, divYield:5.50, beta:0.80, logoBg:'#374151'},
  {ticker:'DIVISLAB.NS', name:'Divi’s Laboratories', exchange:'NSE', sector:'Pharma', currency:'INR', price:9144.5, prevClose:9030, pe:72.0, eps:81.94, mcapCr:156000, volume:280000, avgVolume:250000, high:6500.00, low:3300.00, divYield:0.50, beta:0.55, logoBg:'#6D28D9'},
  {ticker:'BRITANNIA.NS', name:'Britannia Industries', exchange:'NSE', sector:'FMCG', currency:'INR', price:4815, prevClose:4850, pe:55.0, eps:102.73, mcapCr:136000, volume:120000, avgVolume:105000, high:6470.00, low:4640.00, divYield:1.30, beta:0.45, logoBg:'#B91C1C'},
  {ticker:'AAPL', name:'Apple Inc', exchange:'NASDAQ', sector:'Technology', currency:'USD', price:343.46, prevClose:342, pe:35.2, eps:6.62, mcapB:3540, volume:45200000, avgVolume:52000000, high:237.23, low:164.08, divYield:0.42, beta:1.24, logoBg:'#111827'},
  {ticker:'MSFT', name:'Microsoft Corp', exchange:'NASDAQ', sector:'Technology • Cloud', currency:'USD', price:529.05, prevClose:539.44, pe:36.4, eps:11.76, mcapB:3180, volume:18200000, avgVolume:20500000, high:468.35, low:362.90, divYield:0.72, beta:0.90, logoBg:'#0284C7'},
  {ticker:'NVDA', name:'NVIDIA Corp', exchange:'NASDAQ', sector:'Semiconductors • AI', currency:'USD', price:214.13, prevClose:217.23, pe:55.1, eps:2.51, mcapB:3390, volume:210500000, avgVolume:185000000, high:153.13, low:66.25, divYield:0.03, beta:1.66, logoBg:'#059669'},
  {ticker:'TSLA', name:'Tesla Inc', exchange:'NASDAQ', sector:'EV • Auto', currency:'USD', price:354.65, prevClose:362.44, pe:68.4, eps:3.63, mcapB:795, volume:98500000, avgVolume:102000000, high:299.29, low:138.80, divYield:0.00, beta:2.31, logoBg:'#DC2626'},
  {ticker:'AMZN', name:'Amazon.com Inc', exchange:'NASDAQ', sector:'E-commerce • Cloud', currency:'USD', price:250, prevClose:254.76, pe:43.2, eps:4.76, mcapB:2150, volume:38500000, avgVolume:41200000, high:215.90, low:151.61, divYield:0.00, beta:1.15, logoBg:'#D97706'},
  {ticker:'GOOGL', name:'Alphabet Inc', exchange:'NASDAQ', sector:'Technology', currency:'USD', price:340.59, prevClose:349.22, pe:23.9, eps:7.46, mcapB:2180, volume:28500000, avgVolume:26800000, high:193.31, low:130.80, divYield:0.45, beta:1.03, logoBg:'#2563EB'},
  {ticker:'META', name:'Meta Platforms', exchange:'NASDAQ', sector:'Social • AI', currency:'USD', price:709.42, prevClose:736.72, pe:29.8, eps:19.64, mcapB:1480, volume:12500000, avgVolume:13800000, high:602.95, low:414.50, divYield:0.34, beta:1.22, logoBg:'#4F46E5'},
  // Commodity entries are illustrative demo quotes, not live MCX prices.
  {ticker:'GOLD-MCX', name:'Gold (per 10 g)', exchange:'MCX • Demo', sector:'Commodity • Precious Metals', currency:'INR', price:147701, prevClose:147489, pe:0, eps:0, mcapCr:0, volume:12500, avgVolume:11800, high:149436, low:148909, divYield:0, beta:0, logoBg:'#B45309', assetType:'commodity', unit:'10 g'},
  {ticker:'SILVER-MCX', name:'Silver (per kg)', exchange:'MCX • Demo', sector:'Commodity • Precious Metals', currency:'INR', price:211426, prevClose:210660, pe:0, eps:0, mcapCr:0, volume:18500, avgVolume:17200, high:214772, low:216462, divYield:0, beta:0, logoBg:'#64748B', assetType:'commodity', unit:'kg'},
  {ticker:'CRUDEOIL-MCX', name:'Crude Oil (per barrel)', exchange:'MCX • Demo', sector:'Commodity • Energy', currency:'INR', price:9177, prevClose:9030, pe:0, eps:0, mcapCr:0, volume:24500, avgVolume:23000, high:7200, low:5400, divYield:0, beta:0, logoBg:'#334155', assetType:'commodity', unit:'barrel'},
  {ticker:'NATGAS-MCX', name:'Natural Gas (per mmBtu)', exchange:'MCX • Demo', sector:'Commodity • Energy', currency:'INR', price:292.9, prevClose:306, pe:0, eps:0, mcapCr:0, volume:32000, avgVolume:30500, high:310, low:185, divYield:0, beta:0, logoBg:'#0E7490', assetType:'commodity', unit:'mmBtu'},
  {ticker:'COPPER-MCX', name:'Copper (per kg)', exchange:'MCX • Demo', sector:'Commodity • Industrial Metals', currency:'INR', price:1398.8, prevClose:1402, pe:0, eps:0, mcapCr:0, volume:16500, avgVolume:15800, high:910, low:735, divYield:0, beta:0, logoBg:'#B45309', assetType:'commodity', unit:'kg'},
  {ticker:'ALUMINIUM-MCX', name:'Aluminium (per kg)', exchange:'MCX • Demo', sector:'Commodity • Industrial Metals', currency:'INR', price:322.95, prevClose:319.75, pe:0, eps:0, mcapCr:0, volume:14500, avgVolume:13700, high:248, low:205, divYield:0, beta:0, logoBg:'#475569', assetType:'commodity', unit:'kg'},
  {ticker:'ZINC-MCX', name:'Zinc (per kg)', exchange:'MCX • Demo', sector:'Commodity • Industrial Metals', currency:'INR', price:414.6, prevClose:411.2, pe:0, eps:0, mcapCr:0, volume:9800, avgVolume:9100, high:279, low:225, divYield:0, beta:0, logoBg:'#6D28D9'}
];
const PRESETS = [
  {id:'tech', label:'Tech Giants', icon:'cpu', tickers:['AAPL','MSFT','NVDA']},
  {id:'it', label:'Indian IT Leaders', icon:'code', tickers:['TCS.NS','INFY','WIPRO.NS']},
  {id:'bank', label:'Indian Banking', icon:'landmark', tickers:['HDFCBANK.NS','ICICIBANK.NS','SBIN.NS']},
  {id:'auto', label:'EV & Auto', icon:'car', tickers:['TSLA','TATAMOTORS.NS']},
  {id:'conglom', label:'Reliance vs IT', icon:'building-2', tickers:['RELIANCE.NS','TCS.NS','INFY']},
  {id:'commodities', label:'Commodities', icon:'layers', tickers:['GOLD-MCX','SILVER-MCX','CRUDEOIL-MCX']}
];
const INDICES = [
  {symbol:'NIFTY 50', value:24812.65, chg:0.62, exchange:'NSE'},
  {symbol:'SENSEX', value:81455.40, chg:0.58, exchange:'BSE'},
  {symbol:'S&P 500', value:5972.80, chg:0.34, exchange:'NYSE'},
  {symbol:'NASDAQ 100', value:19420.15, chg:0.78, exchange:'NASDAQ'},
  {symbol:'USD / INR', value:83.82, chg:-0.08, exchange:'FX'},
  {symbol:'GOLD', value:2384.20, chg:0.45, exchange:'COMEX'}
];
const NEWS = [
  {time:'2m ago', source:'Moneycontrol', headline:'Reliance Industries gains 1.4% as Jio IPO buzz lifts sentiment; brokerages see 22% upside', tickers:['RELIANCE.NS']},
  {time:'18m ago', source:'Bloomberg', headline:'Nvidia tops $3.3T as AI datacenter demand re-accelerates; analysts hike targets to $160', tickers:['NVDA']},
  {time:'42m ago', source:'ET Markets', headline:'TCS, Infosys in focus ahead of Q2 results; IT stocks see heavy FII buying', tickers:['TCS.NS','INFY']},
  {time:'1h ago', source:'Reuters', headline:'HDFC Bank Q2 preview: NIM expansion eyed, credit growth seen at 14% YoY', tickers:['HDFCBANK.NS']},
  {time:'2h ago', source:'CNBC', headline:'Tesla deliveries beat street; Musk hints at affordable model ramp in 2026', tickers:['TSLA']}
];
const EXPECTED_1Y = {'RELIANCE.NS':0.28,'TCS.NS':0.12,'INFY':0.22,'HDFCBANK.NS':0.08,'ICICIBANK.NS':0.32,'SBIN.NS':0.45,'TATAMOTORS.NS':0.38,'WIPRO.NS':0.15,'AAPL':0.28,'MSFT':0.22,'NVDA':1.85,'TSLA':-0.05,'AMZN':0.42,'GOOGL':0.35,'META':0.68};
const TF_CONFIG = {'1D':{points:78,vol:0.0028,years:0.004},'1W':{points:70,vol:0.006,years:0.02},'1M':{points:30,vol:0.012,years:0.085},'6M':{points:130,vol:0.014,years:0.5},'1Y':{points:180,vol:0.018,years:1},'5Y':{points:180,vol:0.028,years:5},'All':{points:200,vol:0.032,years:7}};

const state = { selected:['RELIANCE.NS','TCS.NS','INFY'], displayCurrency:'AUTO', timeframe:'1M', chartMode:'pct', view:'cards', live:true, aiOpen:true, moversTab:'gainers' };
const watchlist = new Set(['NVDA']);
const alerts = new Map();
const histCache = {};
let chart = null, tickCount = 0, aiVariant = 0;

const crosshairPlugin = {
  id:'crosshair',
  afterDraw(c){
    try{
      if(c.tooltip && c.tooltip.getActiveElements && c.tooltip.getActiveElements().length){
        const x = c.tooltip.getActiveElements()[0].element.x;
        const {top,bottom} = c.chartArea;
        const ctx = c.ctx;
        ctx.save(); ctx.beginPath(); ctx.moveTo(x,top); ctx.lineTo(x,bottom);
        ctx.lineWidth=1; ctx.strokeStyle='#94A3B8'; ctx.setLineDash([4,4]); ctx.stroke(); ctx.restore();
      }
    }catch(e){}
  }
};

// ================= HELPERS =================
function getStock(t){ return STOCKS_DB.find(s=>s.ticker===t); }
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h<<5)-h+s.charCodeAt(i); h|=0; } return Math.abs(h); }
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function getDisplayPriceForValue(val,native){
  if(state.displayCurrency==='AUTO') return {value:val,currency:native};
  if(state.displayCurrency===native) return {value:val,currency:native};
  if(native==='INR'&&state.displayCurrency==='USD') return {value:val/USDINR,currency:'USD'};
  if(native==='USD'&&state.displayCurrency==='INR') return {value:val*USDINR,currency:'INR'};
  return {value:val,currency:native};
}
function getDisplayPrice(stock){ return getDisplayPriceForValue(stock.price,stock.currency); }
function formatPriceStr(s){ const d=getDisplayPrice(s); const sym=d.currency==='INR'?'₹':'$'; return sym+d.value.toLocaleString(d.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function formatVolume(v){ if(v>=1e9) return (v/1e9).toFixed(2)+'B'; if(v>=1e6) return (v/1e6).toFixed(2)+'M'; if(v>=1e3) return (v/1e3).toFixed(1)+'K'; return Math.round(v).toString(); }
function mcapInUSD_B(s){ if(s.currency==='USD') return s.mcapB; return s.mcapCr*0.00011933; }
function formatMCap(stock){
  const disp=state.displayCurrency;
  if(stock.currency==='INR'){
    const cr=stock.mcapCr;
    if(disp==='USD'){ const b=cr*0.00011933; if(b>=1000) return '$'+(b/1000).toFixed(2)+'T'; return '$'+b.toFixed(1)+'B'; }
    else { if(cr>=100000) return '₹'+(cr/100000).toFixed(2)+' LCr'; return '₹'+cr.toLocaleString('en-IN')+' Cr'; }
  } else {
    const b=stock.mcapB;
    if(disp==='INR'){ const cr=b*8380; if(cr>=100000) return '₹'+(cr/100000).toFixed(2)+' LCr'; return '₹'+Math.round(cr).toLocaleString('en-IN')+' Cr'; }
    else { if(b>=1000) return '$'+(b/1000).toFixed(2)+'T'; return '$'+b.toFixed(1)+'B'; }
  }
}
function sparkSVG(prices,positive){
  const sampled = prices.length>50 ? prices.filter((_,i)=>i%Math.ceil(prices.length/50)===0) : prices;
  const w=120,h=36, min=Math.min(...sampled), max=Math.max(...sampled), range=(max-min)||1;
  const step=w/((sampled.length-1)||1);
  const pts=sampled.map((p,i)=>((i*step).toFixed(1))+','+((h-4-((p-min)/range)*(h-8)).toFixed(1))).join(' ');
  const color=positive?'#10B981':'#EF4444';
  return '<svg width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" class="overflow-visible shrink-0"><polygon points="0,'+h+' '+pts+' '+w+','+h+'" fill="'+color+'" opacity="0.08"/><polyline points="'+pts+'" fill="none" stroke="'+color+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}
function showToast(msg,type){
  type=type||'info';
  const wrap=document.getElementById('toastWrap'); if(!wrap) return;
  const colors={success:'border-emerald-200 bg-emerald-50 text-emerald-800',info:'border-slate-200 bg-white text-slate-800',warning:'border-amber-200 bg-amber-50 text-amber-800',error:'border-red-200 bg-red-50 text-red-800'};
  const icons={success:'check',info:'info',warning:'info',error:'x'};
  const el=document.createElement('div');
  el.className='flex items-center gap-2.5 border '+(colors[type]||colors.info)+' px-3.5 py-2.5 rounded-xl shadow-lg text-[13px] font-semibold max-w-[340px]';
  el.style.animation='slideIn .3s ease';
  el.innerHTML='<i data-lucide="'+(icons[type]||'info')+'" class="w-4 h-4 shrink-0"></i><span>'+msg+'</span>';
  wrap.appendChild(el);
  if(window.lucide) lucide.createIcons();
  setTimeout(()=>{ el.style.transition='all .3s'; el.style.opacity='0'; el.style.transform='translateX(20px)'; setTimeout(()=>el.remove(),300); },2800);
}
window.showToast=showToast;

function genLabels(tf){
  const pts=TF_CONFIG[tf].points, labels=[];
  if(tf==='1D'){
    const start=9*60+15,end=15*60+30;
    for(let i=0;i<pts;i++){ const mins=Math.round(start+(end-start)*i/(pts-1)); labels.push(Math.floor(mins/60)+':'+String(mins%60).padStart(2,'0')); }
    return labels;
  }
  if(tf==='1W'){
    const perDay=Math.ceil(pts/5);
    for(let d=4;d>=0;d--){
      const date=new Date(); date.setDate(date.getDate()-d);
      const dayShort=date.toLocaleDateString('en-US',{weekday:'short'});
      for(let k=0;k<perDay && labels.length<pts;k++){
        const mins=9*60+15+Math.round(k*(375/perDay));
        labels.push(dayShort+' '+Math.floor(mins/60)+':'+String(mins%60).padStart(2,'0'));
      }
    }
    return labels;
  }
  if(tf==='1M'){ for(let i=pts-1;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); labels.push(d.toLocaleDateString('en-US',{month:'short',day:'numeric'})); } return labels; }
  if(tf==='6M'||tf==='1Y'){ const total=tf==='6M'?182:365; for(let i=pts-1;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-Math.round(i*total/pts)); labels.push(d.toLocaleDateString('en-US',{month:'short',day:'numeric'})); } return labels; }
  const totalM=tf==='5Y'?60:84;
  for(let i=pts-1;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-Math.round(i*(totalM*30.44)/pts)); labels.push(d.toLocaleDateString('en-US',{month:'short',year:'2-digit'})); }
  return labels;
}
function getHistory(ticker,tf){
  const stock=getStock(ticker); const key=ticker+'_'+tf;
  if(histCache[key]){ const c=histCache[key]; c.prices[c.prices.length-1]=stock.price; return c; }
  const cfg=TF_CONFIG[tf], pts=cfg.points, rand=mulberry32(hashStr(ticker+tf));
  const exp1y=EXPECTED_1Y[ticker]!==undefined?EXPECTED_1Y[ticker]:0.15;
  let totalExp=Math.pow(1+exp1y,cfg.years)-1;
  totalExp+=(rand()-0.5)*0.05*(cfg.years<0.1?0.4:1);
  totalExp=Math.max(-0.85,Math.min(30,totalExp));
  const drift=totalExp/pts, vol=cfg.vol;
  let startP=stock.price/(1+totalExp); if(!isFinite(startP)||startP<=0) startP=stock.price*0.85;
  const prices=[startP];
  for(let i=1;i<pts;i++){ prices.push(prices[i-1]*(1+drift+(rand()-0.5)*2*vol)); }
  const factor=stock.price/prices[pts-1];
  for(let i=0;i<pts;i++){ prices[i]=prices[i]*Math.pow(factor,i/(pts-1)); }
  prices[pts-1]=stock.price;
  const obj={labels:genLabels(tf),prices:prices};
  histCache[key]=obj; return obj;
}

// ================= RENDER: TAPE / PILLS / PRESETS =================
function renderTickerTape(){
  const track=document.getElementById('tickerTrack'); if(!track) return;
  const items=STOCKS_DB.map(s=>{
    const chg=(s.price-s.prevClose)/s.prevClose*100, pos=chg>=0, sym=s.currency==='INR'?'₹':'$';
    const ps=sym+s.price.toLocaleString(s.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    return '<div class="flex items-center gap-2 text-[12px] shrink-0"><span class="font-mono font-bold text-white/90">'+s.ticker+'</span><span data-tape-price="'+s.ticker+'" class="tabular-nums text-white/80 font-medium">'+ps+'</span><span data-tape-chg="'+s.ticker+'" class="tabular-nums font-semibold '+(pos?'text-emerald-400':'text-red-400')+'">'+(pos?'▲':'▼')+' '+Math.abs(chg).toFixed(2)+'%</span><span class="w-1 h-1 rounded-full bg-white/20 ml-4"></span></div>';
  }).join('');
  track.innerHTML=items+items;
}
function updateTickerTapePrices(){
  STOCKS_DB.forEach(s=>{
    const chg=(s.price-s.prevClose)/s.prevClose*100, pos=chg>=0, sym=s.currency==='INR'?'₹':'$';
    const ps=sym+s.price.toLocaleString(s.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.querySelectorAll('[data-tape-price="'+s.ticker+'"]').forEach(el=>el.textContent=ps);
    document.querySelectorAll('[data-tape-chg="'+s.ticker+'"]').forEach(el=>{ el.textContent=(pos?'▲ ':'▼ ')+Math.abs(chg).toFixed(2)+'%'; el.className='tabular-nums font-semibold '+(pos?'text-emerald-400':'text-red-400'); });
  });
}
function renderSelectedPills(){
  const wrap=document.getElementById('selectedPills'); if(!wrap) return;
  const countEl=document.getElementById('selectedCount');
  if(state.selected.length===0){
    wrap.innerHTML='<div class="text-[13px] text-slate-500 flex items-center gap-2"><i data-lucide="info" class="w-4 h-4"></i> No stocks selected — search above or pick a preset to start comparing.</div>';
  } else {
    let html=state.selected.map((t,i)=>{
      const s=getStock(t), color=CHART_COLORS[i%CHART_COLORS.length];
      return '<div class="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-3 pr-1.5 py-1.5 shadow-sm transition-all"><span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:'+color+'"></span><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white shrink-0" style="background:'+s.logoBg+'">'+s.name.charAt(0)+'</div><div class="leading-tight"><div class="text-[12px] font-bold font-mono">'+s.ticker+'</div><div class="text-[11px] text-slate-500 tabular-nums">'+formatPriceStr(s)+'</div></div></div><button data-action="remove-stock" data-ticker="'+t+'" class="w-6 h-6 rounded-md flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Remove"><i data-lucide="x" class="w-3.5 h-3.5 pointer-events-none"></i></button></div>';
    }).join('');
    if(state.selected.length<10) html+='<button data-action="focus-search" class="flex items-center gap-1.5 border border-dashed border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-500 hover:text-slate-700 rounded-xl px-3 py-2 text-[12px] font-semibold transition-all"><i data-lucide="plus" class="w-4 h-4 pointer-events-none"></i> Add stock</button>';
    wrap.innerHTML=html;
  }
  if(countEl) countEl.textContent=state.selected.length+'/10';
  if(window.lucide) lucide.createIcons();
}
function renderPresetChips(){
  const wrap=document.getElementById('presetChips'); if(!wrap) return;
  wrap.innerHTML=PRESETS.map(p=>{
    const active=p.tickers.length===state.selected.length && p.tickers.every(t=>state.selected.includes(t));
    return '<button data-action="set-preset" data-preset="'+p.id+'" class="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full border transition-all '+(active?'bg-[#0F172A] text-white border-[#0F172A] shadow-sm':'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50')+'"><i data-lucide="'+p.icon+'" class="w-3.5 h-3.5 pointer-events-none"></i><span class="pointer-events-none">'+p.label+'</span><span class="text-[10px] font-mono opacity-60 pointer-events-none">'+p.tickers.length+'</span></button>';
  }).join('');
  if(window.lucide) lucide.createIcons();
}
function updateControlStates(){
  document.querySelectorAll('[data-action="set-timeframe"]').forEach(b=>{
    const a=b.dataset.tf===state.timeframe;
    b.className='px-2.5 py-1.5 text-[12px] font-bold rounded-md transition-all tabular-nums whitespace-nowrap '+(a?'bg-[#0F172A] text-white shadow-sm':'text-slate-500 hover:text-slate-900 hover:bg-slate-200/60');
  });
  document.querySelectorAll('[data-action="set-curr"]').forEach(b=>{
    const a=b.dataset.curr===state.displayCurrency;
    b.className='px-2.5 py-1 text-[12px] font-bold rounded-md transition-all '+(a?'bg-white text-[#0F172A] shadow-sm border border-slate-200':'text-slate-500 hover:text-slate-700');
  });
  document.querySelectorAll('[data-action="set-view"]').forEach(b=>{
    const a=b.dataset.view===state.view;
    b.className='flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold rounded-md transition-all '+(a?'bg-white text-[#0F172A] shadow-sm border border-slate-200':'text-slate-500 hover:text-slate-700');
  });
  document.querySelectorAll('[data-action="set-mode"]').forEach(b=>{
    const a=b.dataset.mode===state.chartMode;
    b.className='px-3 py-1 text-[12px] font-bold rounded-md transition-all whitespace-nowrap '+(a?'bg-white text-[#0F172A] shadow-sm border border-slate-200':'text-slate-500 hover:text-slate-700');
  });
  document.querySelectorAll('[data-action="movers-tab"]').forEach(b=>{
    const a=b.dataset.tab===state.moversTab;
    b.className='flex-1 text-[12px] font-bold py-1.5 rounded-md transition-all '+(a?'bg-white shadow-sm text-[#0F172A] border border-slate-200':'text-slate-500');
  });
  const chev=document.getElementById('aiChevron'); if(chev) chev.style.transform=state.aiOpen?'rotate(180deg)':'rotate(0deg)';
  const aiC=document.getElementById('aiContent'); if(aiC){ if(state.aiOpen) aiC.classList.remove('hidden'); else aiC.classList.add('hidden'); }
}

// ================= RENDER: CARDS =================
function renderCards(){
  const grid=document.getElementById('cardsGrid'); if(!grid) return;
  if(state.selected.length===0){
    grid.className='grid grid-cols-1 gap-4';
    grid.innerHTML='<div class="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center"><div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><i data-lucide="activity" class="w-6 h-6 text-slate-400"></i></div><h3 class="font-bold text-[15px]">No stocks to compare</h3><p class="text-[13px] text-slate-500 mt-1 mb-4">Search for a company or pick a quick preset to build your comparison.</p><button data-action="focus-search" class="bg-[#0F172A] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-slate-800">Search stocks</button></div>';
    if(window.lucide) lucide.createIcons(); return;
  }
  const stocks=state.selected.map(getStock);
  const bestPE=[...stocks].sort((a,b)=>a.pe-b.pe)[0].ticker;
  const bestMcap=[...stocks].sort((a,b)=>mcapInUSD_B(b)-mcapInUSD_B(a))[0].ticker;
  const bestVol=[...stocks].sort((a,b)=>(b.volume/b.avgVolume)-(a.volume/a.avgVolume))[0].ticker;
  const bestGainer=[...stocks].sort((a,b)=>((b.price-b.prevClose)/b.prevClose)-((a.price-a.prevClose)/a.prevClose))[0].ticker;
  const n=state.selected.length;
  grid.className='grid gap-4 '+(n===1?'grid-cols-1 max-w-[540px]':n===2?'grid-cols-1 md:grid-cols-2':n===3?'grid-cols-1 md:grid-cols-2 xl:grid-cols-3':'grid-cols-1 md:grid-cols-2 xl:grid-cols-4');
  grid.innerHTML=stocks.map((s,idx)=>{
    const color=CHART_COLORS[idx%CHART_COLORS.length];
    const did=s.ticker.replace(/[^a-z0-9]/gi,'-');
    const disp=getDisplayPrice(s), sym=disp.currency==='INR'?'₹':'$', loc=disp.currency==='INR'?'en-IN':'en-US';
    const priceStr=sym+disp.value.toLocaleString(loc,{minimumFractionDigits:2,maximumFractionDigits:2});
    const pct=(s.price-s.prevClose)/s.prevClose*100, pos=pct>=0;
    const prevDisp=getDisplayPriceForValue(s.prevClose,s.currency);
    const diff=disp.value-prevDisp.value;
    const diffStr=(diff>=0?'+':'')+sym+Math.abs(diff).toLocaleString(loc,{minimumFractionDigits:2,maximumFractionDigits:2});
    const highD=getDisplayPriceForValue(s.high,s.currency), lowD=getDisplayPriceForValue(s.low,s.currency);
    const pos52=Math.min(100,Math.max(0,(s.price-s.low)/(s.high-s.low)*100));
    const volR=s.volume/s.avgVolume;
    const volBadge = volR>=1.2 ? '<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 px-1.5 py-0.5 rounded-md"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>'+volR.toFixed(1)+'x AVG • HIGH</span>' : volR>=1.0 ? '<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-100 px-1.5 py-0.5 rounded-md">'+volR.toFixed(2)+'x AVG</span>' : '<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded-md">'+volR.toFixed(2)+'x AVG</span>';
    const spark=sparkSVG(getHistory(s.ticker,'1D').prices,pos);
    const watched=watchlist.has(s.ticker);
    let badges='';
    if(s.ticker===bestPE) badges+='<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full"><i data-lucide="check" class="w-3 h-3"></i> Best P/E</span>';
    if(s.ticker===bestGainer) badges+='<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-[#0F172A] text-white px-2 py-0.5 rounded-full"><i data-lucide="trophy" class="w-3 h-3"></i> Top Gainer</span>';
    if(s.ticker===bestVol && n>1) badges+='<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-sky-600 text-white px-2 py-0.5 rounded-full"><i data-lucide="activity" class="w-3 h-3"></i> Top Volume</span>';
    return '<article class="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all overflow-hidden flex flex-col">'
    +'<div class="h-1 w-full" style="background:'+color+'"></div><div class="p-4 flex-1 flex flex-col">'
    +'<div class="flex items-start justify-between gap-2"><div class="flex items-center gap-2.5 min-w-0"><div class="w-10 h-10 rounded-xl flex items-center justify-center text-[14px] font-extrabold text-white shrink-0 shadow-sm" style="background:'+s.logoBg+'">'+s.name.charAt(0)+'</div><div class="min-w-0"><div class="text-[13px] font-bold truncate leading-tight">'+s.name+'</div><div class="flex items-center gap-1.5 mt-1"><span class="text-[11px] font-mono font-bold text-slate-500">'+s.ticker+'</span><span class="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">'+s.exchange+'</span></div></div></div>'
    +'<div class="flex items-center gap-1 shrink-0"><button data-action="toggle-watch" data-ticker="'+s.ticker+'" class="w-7 h-7 rounded-lg flex items-center justify-center transition-colors '+(watched?'text-amber-500 bg-amber-50':'text-slate-400 hover:text-slate-600 hover:bg-slate-100')+'"><i data-lucide="star" class="w-4 h-4 pointer-events-none '+(watched?'fill-current':'')+'"></i></button><button data-action="remove-stock" data-ticker="'+s.ticker+'" class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"><i data-lucide="x" class="w-4 h-4 pointer-events-none"></i></button></div></div>'
    +(badges?'<div class="flex flex-wrap gap-1.5 mt-3">'+badges+'</div>':'')
    +'<div class="flex items-end justify-between gap-3 mt-3"><div><div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Last Price • <span class="text-amber-600">SIMULATED</span></div><div id="price-'+did+'" class="text-[26px] leading-8 font-extrabold tracking-tight tabular-nums mt-0.5">'+priceStr+'</div><div class="flex items-center gap-2 mt-1.5 flex-wrap"><span id="chg-'+did+'" class="inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-md tabular-nums '+(pos?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-600')+'"><i data-lucide="'+(pos?'trending-up':'trending-down')+'" class="w-3.5 h-3.5"></i> '+(pos?'+':'')+pct.toFixed(2)+'%</span><span id="chgAbs-'+did+'" class="text-[11px] font-semibold tabular-nums '+(pos?'text-emerald-600':'text-red-500')+'">'+diffStr+' today</span></div></div><div class="hidden sm:block">'+spark+'</div></div>'
    +'<div class="grid grid-cols-2 gap-2 mt-4">'
    +'<div class="rounded-xl border p-2.5 '+(s.ticker===bestPE?'border-emerald-200 bg-emerald-50/50':'border-slate-100 bg-slate-50/60')+'"><div class="text-[10px] font-bold uppercase tracking-wider '+(s.ticker===bestPE?'text-emerald-700':'text-slate-500')+' flex items-center gap-1">P/E Ratio '+(s.ticker===bestPE?'<i data-lucide="check" class="w-3 h-3"></i>':'')+'</div><div class="text-[15px] font-extrabold tabular-nums mt-0.5">'+s.pe.toFixed(1)+'x</div><div class="text-[10px] text-slate-500 tabular-nums">EPS '+(s.currency==='INR'?'₹':'$')+s.eps.toFixed(2)+'</div></div>'
    +'<div class="rounded-xl border p-2.5 '+(s.ticker===bestMcap?'border-emerald-200 bg-emerald-50/50':'border-slate-100 bg-slate-50/60')+'"><div class="text-[10px] font-bold uppercase tracking-wider '+(s.ticker===bestMcap?'text-emerald-700':'text-slate-500')+' flex items-center gap-1">Market Cap '+(s.ticker===bestMcap?'<i data-lucide="check" class="w-3 h-3"></i>':'')+'</div><div class="text-[15px] font-extrabold tabular-nums mt-0.5 truncate">'+formatMCap(s)+'</div><div class="text-[10px] text-slate-500">'+s.sector.split('•')[0].trim()+'</div></div>'
    +'<div class="rounded-xl border border-slate-100 bg-slate-50/60 p-2.5"><div class="text-[10px] font-bold uppercase tracking-wider text-slate-500">Volume</div><div id="vol-'+did+'" class="text-[15px] font-extrabold tabular-nums mt-0.5">'+formatVolume(s.volume)+'</div><div class="mt-1">'+volBadge+'</div></div>'
    +'<div class="rounded-xl border border-slate-100 bg-slate-50/60 p-2.5"><div class="text-[10px] font-bold uppercase tracking-wider text-slate-500">Div Yield • Beta</div><div class="text-[15px] font-extrabold tabular-nums mt-0.5">'+s.divYield.toFixed(2)+'%</div><div class="text-[10px] text-slate-500 tabular-nums">β '+s.beta.toFixed(2)+' '+(s.beta>1.2?'• High vol':s.beta<0.8?'• Defensive':'')+'</div></div>'
    +'</div>'
    +'<div class="mt-3 rounded-xl border border-slate-100 p-3"><div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500"><span>52W Low<br><span class="text-[12px] font-extrabold text-slate-700 tabular-nums">'+sym+lowD.value.toLocaleString(loc,{maximumFractionDigits:0})+'</span></span><span class="text-center">52W Range<br><span class="text-[11px] font-extrabold text-[#0F172A] tabular-nums">'+pos52.toFixed(0)+'% of range</span></span><span class="text-right">52W High<br><span class="text-[12px] font-extrabold text-slate-700 tabular-nums">'+sym+highD.value.toLocaleString(loc,{maximumFractionDigits:0})+'</span></span></div><div class="relative h-1.5 bg-slate-100 rounded-full mt-2.5 mx-1"><div class="absolute left-0 top-0 h-full rounded-full bg-slate-400" style="width:'+pos52+'%"></div><div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md" style="left:'+pos52+'%; background:'+color+'"></div></div></div>'
    +'<div class="flex gap-2 mt-3"><button data-action="analyze-stock" data-ticker="'+s.ticker+'" class="flex-1 text-[12px] font-bold bg-[#0F172A] text-white py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"><i data-lucide="activity" class="w-3.5 h-3.5 pointer-events-none"></i> Analyze</button><button data-action="set-alert" data-ticker="'+s.ticker+'" class="flex-1 text-[12px] font-bold bg-white border border-slate-200 text-slate-700 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"><i data-lucide="bell" class="w-3.5 h-3.5 pointer-events-none"></i> Alert</button></div>'
    +'</div></article>';
  }).join('');
  if(window.lucide) lucide.createIcons();
}
function renderMatrixTable(){
  const wrap=document.getElementById('matrixTableWrap'); if(!wrap) return;
  if(state.selected.length===0){ wrap.innerHTML='<div class="bg-white border border-dashed border-slate-300 rounded-2xl p-10 text-center text-[13px] text-slate-500">No stocks selected.</div>'; return; }
  const stocks=state.selected.map(getStock);
  const bestPE=[...stocks].sort((a,b)=>a.pe-b.pe)[0].ticker;
  const bestMcap=[...stocks].sort((a,b)=>mcapInUSD_B(b)-mcapInUSD_B(a))[0].ticker;
  let html='<div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"><div class="overflow-x-auto"><table class="w-full text-[13px] min-w-[720px]"><thead><tr class="border-b border-slate-100 bg-slate-50/60"><th class="text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 p-4 sticky left-0 bg-slate-50 w-[180px]">Metric</th>';
  stocks.forEach((s,idx)=>{
    const disp=getDisplayPrice(s), sym=disp.currency==='INR'?'₹':'$', loc=disp.currency==='INR'?'en-IN':'en-US';
    const pct=(s.price-s.prevClose)/s.prevClose*100, pos=pct>=0;
    html+='<th class="p-4 text-left min-w-[210px] border-l border-slate-100 align-top"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[12px] font-bold shrink-0" style="background:'+s.logoBg+'">'+s.name.charAt(0)+'</div><div class="min-w-0"><div class="text-[13px] font-bold font-mono">'+s.ticker+'</div><div class="text-[11px] font-medium text-slate-500 truncate max-w-[140px]">'+s.name+'</div></div><button data-action="remove-stock" data-ticker="'+s.ticker+'" class="ml-auto w-6 h-6 rounded-md flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50"><i data-lucide="x" class="w-3.5 h-3.5 pointer-events-none"></i></button></div><div class="mt-2 flex items-center gap-2"><span class="text-[18px] font-extrabold tabular-nums">'+sym+disp.value.toLocaleString(loc,{minimumFractionDigits:2})+'</span><span class="text-[11px] font-bold px-1.5 py-0.5 rounded tabular-nums '+(pos?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-600')+'">'+(pos?'+':'')+pct.toFixed(2)+'%</span></div></th>';
  });
  html+='</tr></thead><tbody>';
  const rows=[
    {label:'P/E Ratio', get:s=>s.pe.toFixed(1)+'x', best:bestPE},
    {label:'Market Cap', get:formatMCap, best:bestMcap},
    {label:'Volume / Avg', get:s=>formatVolume(s.volume)+' ('+(s.volume/s.avgVolume).toFixed(2)+'x)'},
    {label:'Dividend Yield', get:s=>s.divYield.toFixed(2)+'%'},
    {label:'Beta', get:s=>s.beta.toFixed(2)},
    {label:'EPS (TTM)', get:s=>(s.currency==='INR'?'₹':'$')+s.eps.toFixed(2)},
    {label:'52W Low → High', get:s=>{ const d=getDisplayPrice(s); const sym=d.currency==='INR'?'₹':'$'; const loc=d.currency==='INR'?'en-IN':'en-US'; const lo=getDisplayPriceForValue(s.low,s.currency).value.toLocaleString(loc,{maximumFractionDigits:0}); const hi=getDisplayPriceForValue(s.high,s.currency).value.toLocaleString(loc,{maximumFractionDigits:0}); return sym+lo+' → '+sym+hi; }}
  ];
  rows.forEach((r,i)=>{
    html+='<tr class="'+(i%2?'bg-slate-50/40':'')+' border-b border-slate-50 last:border-0"><td class="p-3.5 px-4 font-semibold text-slate-600 sticky left-0 '+(i%2?'bg-[#F8FAFC]':'bg-white')+'">'+r.label+'</td>';
    stocks.forEach(s=>{
      const isBest=r.best&&s.ticker===r.best;
      html+='<td class="p-3.5 px-4 border-l border-slate-100 tabular-nums font-semibold '+(isBest?'bg-emerald-50/70 text-emerald-900':'')+'">'+r.get(s)+(isBest?' <i data-lucide="check" class="w-3.5 h-3.5 inline ml-1 text-emerald-600"></i>':'')+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody></table></div></div>';
  wrap.innerHTML=html;
  if(window.lucide) lucide.createIcons();
}
function renderComparison(){
  const grid=document.getElementById('cardsGrid'), tw=document.getElementById('matrixTableWrap');
  if(state.view==='cards'){ if(grid) grid.classList.remove('hidden'); if(tw) tw.classList.add('hidden'); renderCards(); }
  else { if(grid) grid.classList.add('hidden'); if(tw) tw.classList.remove('hidden'); renderMatrixTable(); }
  renderFundamentals(); renderAI();
  const wc=document.getElementById('watchCount'); if(wc) wc.textContent=watchlist.size;
}

// ================= CHART =================
function renderLegend(){
  const wrap=document.getElementById('chartLegend'); if(!wrap) return;
  if(state.selected.length===0){ wrap.innerHTML='<span class="text-[12px] text-slate-500">No series</span>'; return; }
  wrap.innerHTML=state.selected.map((t,idx)=>{
    const s=getStock(t), color=CHART_COLORS[idx%CHART_COLORS.length];
    const h=getHistory(t,state.timeframe), ret=(h.prices[h.prices.length-1]/h.prices[0]-1)*100, pos=ret>=0;
    const hidden=chart&&!chart.isDatasetVisible(idx);
    return '<button data-action="toggle-dataset" data-idx="'+idx+'" class="flex items-center gap-2 border rounded-lg pl-2.5 pr-3 py-1.5 text-[12px] transition-all hover:shadow-sm '+(hidden?'opacity-40 bg-slate-50 border-slate-200':'bg-white border-slate-200')+'"><span class="w-2.5 h-2.5 rounded-full pointer-events-none" style="background:'+color+'"></span><span class="font-mono font-bold pointer-events-none">'+t+'</span><span class="font-bold tabular-nums pointer-events-none '+(pos?'text-emerald-600':'text-red-500')+'">'+(pos?'+':'')+ret.toFixed(2)+'%</span><span class="text-slate-400 tabular-nums hidden sm:inline pointer-events-none">'+formatPriceStr(s)+'</span><i data-lucide="'+(hidden?'eye-off':'eye')+'" class="w-3.5 h-3.5 text-slate-400 pointer-events-none"></i></button>';
  }).join('');
  if(window.lucide) lucide.createIcons();
}
function renderReturnsTable(){
  const wrap=document.getElementById('returnsTable'); if(!wrap) return;
  if(state.selected.length===0){ wrap.innerHTML=''; return; }
  const tfs=['1D','1W','1M','6M','1Y'];
  let html='<table class="w-full text-[12px] border border-slate-200 rounded-xl overflow-hidden"><thead><tr class="bg-slate-50 border-b border-slate-200"><th class="text-left p-2.5 px-3 font-bold text-slate-600">Symbol</th>';
  tfs.forEach(tf=>{ html+='<th class="text-right p-2.5 px-3 font-bold '+(tf===state.timeframe?'text-[#0F172A] bg-slate-100':'text-slate-500')+'">'+tf+'</th>'; });
  html+='</tr></thead><tbody>';
  state.selected.forEach((t,idx)=>{
    const color=CHART_COLORS[idx%CHART_COLORS.length];
    html+='<tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"><td class="p-2.5 px-3 font-mono font-bold"><span class="inline-flex items-center gap-2"><span class="w-2 h-2 rounded-full" style="background:'+color+'"></span>'+t+'</span></td>';
    tfs.forEach(tf=>{
      const h=getHistory(t,tf), ret=(h.prices[h.prices.length-1]/h.prices[0]-1)*100, pos=ret>=0;
      html+='<td class="text-right p-2.5 px-3 tabular-nums font-bold '+(pos?'text-emerald-600':'text-red-500')+' '+(tf===state.timeframe?'bg-slate-50':'')+'">'+(pos?'+':'')+ret.toFixed(2)+'%</td>';
    });
    html+='</tr>';
  });
  html+='</tbody></table>'; wrap.innerHTML=html;
}
function updateChart(){
  const canvas=document.getElementById('perfChart'), empty=document.getElementById('chartEmpty');
  if(!canvas) return;
  if(state.selected.length===0){
    if(chart){ chart.destroy(); chart=null; }
    if(empty){ empty.classList.remove('hidden'); empty.classList.add('flex'); }
    const leg=document.getElementById('chartLegend'); if(leg) leg.innerHTML='<span class="text-[12px] text-slate-500">No series — add stocks to chart</span>';
    const ret=document.getElementById('returnsTable'); if(ret) ret.innerHTML='';
    return;
  }
  if(empty){ empty.classList.add('hidden'); empty.classList.remove('flex'); }
  const tf=state.timeframe, mode=state.chartMode;
  const labels=getHistory(state.selected[0],tf).labels;
  const datasets=state.selected.map((ticker,idx)=>{
    const stock=getStock(ticker), hist=getHistory(ticker,tf);
    let data;
    if(mode==='pct'){ const base=hist.prices[0]; data=hist.prices.map(p=>((p/base-1)*100)); }
    else { data=hist.prices.map(p=>getDisplayPriceForValue(p,stock.currency).value); }
    const color=CHART_COLORS[idx%CHART_COLORS.length];
    return {label:ticker,data:data,borderColor:color,backgroundColor:color,borderWidth:2,tension:0.2,pointRadius:0,pointHoverRadius:4,pointHoverBackgroundColor:color,pointHoverBorderColor:'#fff',pointHoverBorderWidth:2,borderJoinStyle:'round',borderCapStyle:'round'};
  });
  const yCb = mode==='pct'
    ? (v)=>v.toFixed(0)+'%'
    : (v)=>{ if(state.displayCurrency==='INR') return '₹'+Number(v).toLocaleString('en-IN',{maximumFractionDigits:0}); if(state.displayCurrency==='USD') return '$'+Number(v).toLocaleString('en-US',{maximumFractionDigits:0}); return Number(v).toLocaleString('en-US',{maximumFractionDigits:0}); };
  if(chart){ chart.data.labels=labels; chart.data.datasets=datasets; chart.options.scales.y.ticks.callback=yCb; chart.update(); }
  else {
    if(window.Chart) Chart.defaults.font.family='Inter';
    chart=new Chart(canvas,{
      type:'line',
      data:{labels:labels,datasets:datasets},
      options:{
        responsive:true,maintainAspectRatio:false,
        interaction:{mode:'index',intersect:false},
        plugins:{
          legend:{display:false},
          tooltip:{
            backgroundColor:'#0F172A',titleColor:'#CBD5E1',bodyColor:'#FFFFFF',padding:12,cornerRadius:10,
            titleFont:{family:'Inter',size:11,weight:'600'},bodyFont:{family:'Inter',size:12,weight:'600'},
            displayColors:true,boxWidth:8,boxHeight:8,usePointStyle:true,
            callbacks:{
              title:(items)=>state.timeframe+' • '+(items[0]?items[0].label:''),
              label:(ctx)=>{
                const ticker=ctx.dataset.label, stock=getStock(ticker);
                if(state.chartMode==='pct'){
                  const hist=getHistory(ticker,state.timeframe), price=hist.prices[ctx.dataIndex];
                  const disp=getDisplayPriceForValue(price,stock.currency), sym=disp.currency==='INR'?'₹':'$', loc=disp.currency==='INR'?'en-IN':'en-US';
                  const v=ctx.parsed.y;
                  return ' '+ticker+': '+(v>=0?'+':'')+v.toFixed(2)+'% ('+sym+disp.value.toLocaleString(loc,{minimumFractionDigits:2})+')';
                } else {
                  const dc=state.displayCurrency==='AUTO'?stock.currency:state.displayCurrency, sym=dc==='INR'?'₹':'$', loc=dc==='INR'?'en-IN':'en-US';
                  return ' '+ticker+': '+sym+ctx.parsed.y.toLocaleString(loc,{minimumFractionDigits:2});
                }
              }
            }
          }
        },
        scales:{
          x:{grid:{display:false},border:{display:false},ticks:{font:{family:'Inter',size:10},color:'#64748B',maxTicksLimit:8,maxRotation:0,padding:6}},
          y:{position:'right',grid:{color:'#F1F5F9'},border:{display:false},ticks:{font:{family:'Inter',size:10},color:'#64748B',padding:8,callback:yCb}}
        },
        animation:{duration:500,easing:'easeOutQuart'}
      },
      plugins:[crosshairPlugin]
    });
  }
  renderLegend(); renderReturnsTable();
}

// ================= FUNDAMENTALS =================
function renderFundamentals(){
  const wrap=document.getElementById('fundamentalsTable'); if(!wrap) return;
  if(state.selected.length===0){ wrap.innerHTML='<div class="p-8 text-center text-[13px] text-slate-500">Select stocks to view fundamentals.</div>'; return; }
  const stocks=state.selected.map(getStock);
  const winPE=[...stocks].sort((a,b)=>a.pe-b.pe)[0].ticker;
  const winMcap=[...stocks].sort((a,b)=>mcapInUSD_B(b)-mcapInUSD_B(a))[0].ticker;
  const winDiv=[...stocks].sort((a,b)=>b.divYield-a.divYield)[0].ticker;
  const winVolR=[...stocks].sort((a,b)=>(b.volume/b.avgVolume)-(a.volume/a.avgVolume))[0].ticker;
  const winBeta=[...stocks].sort((a,b)=>a.beta-b.beta)[0].ticker;
  const winDay=[...stocks].sort((a,b)=>((b.price-b.prevClose)/b.prevClose)-((a.price-a.prevClose)/a.prevClose))[0].ticker;
  const rows=[
    {label:'Current Price',sub:'Live',get:s=>formatPriceStr(s)},
    {label:'Day Change',sub:'vs Prev Close',get:s=>{const p=(s.price-s.prevClose)/s.prevClose*100;return '<span class="'+(p>=0?'text-emerald-600':'text-red-500')+'">'+(p>=0?'+':'')+p.toFixed(2)+'%</span>';},winner:winDay},
    {label:'Market Cap',sub:'Total value',get:formatMCap,winner:winMcap},
    {label:'P/E Ratio (TTM)',sub:'Lower = cheaper',get:s=>s.pe.toFixed(2)+'x',winner:winPE},
    {label:'EPS (TTM)',sub:'Earnings / share',get:s=>(s.currency==='INR'?'₹':'$')+s.eps.toFixed(2)},
    {label:'Dividend Yield',sub:'Annual payout',get:s=>s.divYield.toFixed(2)+'%',winner:winDiv},
    {label:'Volume',sub:'Today',get:s=>formatVolume(s.volume)},
    {label:'Avg Volume (3M)',sub:'Benchmark',get:s=>formatVolume(s.avgVolume)},
    {label:'Volume Ratio',sub:'vs Average',get:s=>(s.volume/s.avgVolume).toFixed(2)+'x',winner:winVolR},
    {label:'52W High',sub:'Peak',get:s=>{const d=getDisplayPriceForValue(s.high,s.currency);return (d.currency==='INR'?'₹':'$')+d.value.toLocaleString(d.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2});}},
    {label:'52W Low',sub:'Trough',get:s=>{const d=getDisplayPriceForValue(s.low,s.currency);return (d.currency==='INR'?'₹':'$')+d.value.toLocaleString(d.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2});}},
    {label:'52W Position',sub:'% of range',get:s=>((s.price-s.low)/(s.high-s.low)*100).toFixed(1)+'%'},
    {label:'Beta',sub:'Volatility',get:s=>s.beta.toFixed(2),winner:winBeta},
    {label:'Sector',sub:'Industry',get:s=>s.sector},
    {label:'Exchange',sub:'Listing',get:s=>s.exchange}
  ];
  let html='<table class="w-full text-[13px] min-w-[680px]"><thead><tr class="border-b border-slate-200 bg-slate-50/80"><th class="text-left p-3 px-4 font-bold text-slate-500 text-[11px] uppercase tracking-wider sticky left-0 bg-slate-50 z-10 min-w-[180px]">Fundamental</th>';
  stocks.forEach((s,idx)=>{ html+='<th class="p-3 px-4 text-left border-l border-slate-100 min-w-[170px]"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full" style="background:'+CHART_COLORS[idx%CHART_COLORS.length]+'"></span><span class="font-mono font-bold text-[12px]">'+s.ticker+'</span></div><div class="text-[11px] font-medium text-slate-500 truncate mt-0.5">'+s.name+'</div></th>'; });
  html+='</tr></thead><tbody>';
  rows.forEach(r=>{
    html+='<tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50/40"><td class="p-3 px-4 sticky left-0 bg-white"><div class="font-bold text-slate-700 text-[13px]">'+r.label+'</div><div class="text-[11px] text-slate-400">'+r.sub+'</div></td>';
    stocks.forEach(s=>{
      const isWin=r.winner&&s.ticker===r.winner;
      html+='<td class="p-3 px-4 border-l border-slate-100 tabular-nums font-semibold '+(isWin?'bg-emerald-50/70 text-emerald-900':'')+'">'+r.get(s)+(isWin?' <span class="ml-1 inline-flex text-emerald-700 align-middle"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>':'')+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody></table>'; wrap.innerHTML=html;
  if(window.lucide) lucide.createIcons();
}

// ================= AI =================
function generateAIInsight(){
  const stocks=state.selected.map(getStock);
  if(stocks.length===0) return null;
  if(stocks.length===1){
    const s=stocks[0], pct=(s.price-s.prevClose)/s.prevClose*100, volR=s.volume/s.avgVolume;
    return {single:true,confidence:88,valuePick:s.ticker,momentumPick:s.ticker,
      summary:s.name+' ('+s.ticker+') is trading at '+formatPriceStr(s)+' ('+(pct>=0?'+':'')+pct.toFixed(2)+'% today) with a P/E of '+s.pe.toFixed(1)+'x and '+formatMCap(s)+' market capitalization. Volume is running at '+volR.toFixed(2)+'x its 3-month average, indicating '+(volR>1.2?'elevated investor interest':'muted participation')+' — add another stock to unlock side-by-side AI comparison.',
      bullets:[
        {icon:'scale',title:'Valuation',text:'P/E '+s.pe.toFixed(1)+'x • EPS '+(s.currency==='INR'?'₹':'$')+s.eps.toFixed(2)+' • '+(s.pe<20?'Attractively priced vs market':s.pe<30?'Fairly valued':'Growth premium pricing')+'.'},
        {icon:'activity',title:'Technical',text:((s.price-s.low)/(s.high-s.low)*100).toFixed(0)+'% up its 52-week range • Beta '+s.beta.toFixed(2)+' suggests '+(s.beta>1.2?'high sensitivity to market swings':'moderate volatility')+'.'},
        {icon:'info',title:'Next Step',text:'Add 1-3 more tickers to compare P/E spreads, liquidity and momentum side-by-side.'}
      ]};
  }
  const sortedPE=[...stocks].sort((a,b)=>a.pe-b.pe), bestPE=sortedPE[0], worstPE=sortedPE[sortedPE.length-1];
  const largest=[...stocks].sort((a,b)=>mcapInUSD_B(b)-mcapInUSD_B(a))[0];
  const volLeader=[...stocks].sort((a,b)=>(b.volume/b.avgVolume)-(a.volume/a.avgVolume))[0];
  const perf=stocks.map(s=>{const h=getHistory(s.ticker,state.timeframe);return {stock:s,ret:(h.prices[h.prices.length-1]/h.prices[0]-1)*100};}).sort((a,b)=>b.ret-a.ret);
  const leader=perf[0], laggard=perf[perf.length-1], spread=leader.ret-laggard.ret;
  const disc=((worstPE.pe-bestPE.pe)/worstPE.pe*100).toFixed(0);
  const variants=[
    bestPE.name+' ('+bestPE.ticker+') trades at the most attractive valuation with a P/E of '+bestPE.pe.toFixed(1)+'x — '+disc+'% cheaper than '+worstPE.ticker+' at '+worstPE.pe.toFixed(1)+'x — while '+volLeader.ticker+' commands the strongest liquidity at '+(volLeader.volume/volLeader.avgVolume).toFixed(2)+'x average volume. Over the '+state.timeframe+' window, '+leader.stock.ticker+' leads with '+(leader.ret>=0?'+':'')+leader.ret.toFixed(2)+'% return, outpacing '+laggard.stock.ticker+' by '+spread.toFixed(2)+'pp, suggesting '+(spread>2?'clear momentum leadership':'relative resilience')+' into the next session.',
    leader.stock.ticker+' is the '+state.timeframe+' momentum leader at '+(leader.ret>=0?'+':'')+leader.ret.toFixed(2)+'% with '+volLeader.ticker+' printing '+formatVolume(volLeader.volume)+' shares ('+(volLeader.volume/volLeader.avgVolume).toFixed(2)+'x avg), signaling '+(volLeader.volume>volLeader.avgVolume?'institutional participation':'healthy turnover')+'. On valuation, '+bestPE.ticker+' screens cheapest at '+bestPE.pe.toFixed(1)+'x earnings versus '+worstPE.ticker+' at '+worstPE.pe.toFixed(1)+'x, while '+largest.ticker+' anchors scale at '+formatMCap(largest)+' — a classic growth-vs-value setup for beginners to weigh.'
  ];
  const avgBeta=stocks.reduce((a,s)=>a+s.beta,0)/stocks.length;
  return {single:false,summary:variants[aiVariant%variants.length],confidence:84+((aiVariant*3)%6),valuePick:bestPE.ticker,momentumPick:leader.stock.ticker,
    risk:avgBeta>1.3?'High':avgBeta>1.0?'Moderate-High':avgBeta>0.8?'Moderate':'Low-Moderate',
    bullets:[
      {icon:'scale',title:'Valuation Edge',text:bestPE.ticker+' offers '+disc+'% lower earnings multiple than '+worstPE.ticker+'. '+(bestPE.pe<20?'Deep value territory — check earnings quality.':'Relative value edge in '+bestPE.sector+'.')},
      {icon:'trending-up',title:'Momentum',text:leader.stock.ticker+' '+(leader.ret>=0?'gained':'fell')+' '+leader.ret.toFixed(2)+'% ('+state.timeframe+') '+(leader.stock.volume>leader.stock.avgVolume?'with volume confirmation':'on muted volume')+'; '+laggard.stock.ticker+' trails at '+laggard.ret.toFixed(2)+'%. Spread: '+spread.toFixed(2)+'pp.'},
      {icon:'droplets',title:'Liquidity & Scale',text:largest.ticker+' dominates size at '+formatMCap(largest)+'; '+volLeader.ticker+' leads buzz at '+(volLeader.volume/volLeader.avgVolume).toFixed(2)+'x avg volume ('+formatVolume(volLeader.volume)+' shares).'}
    ]};
}
function renderAI(){
  const content=document.getElementById('aiContentInner'), confEl=document.getElementById('aiConfidence');
  if(!content) return;
  const ins=generateAIInsight();
  if(!ins){ content.innerHTML='<div class="p-6 text-center text-[13px] text-slate-500">Add stocks to generate AI summary.</div>'; if(confEl) confEl.textContent=''; return; }
  if(confEl) confEl.innerHTML='<span class="text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded">Confidence '+ins.confidence+'%</span>';
  content.innerHTML='<div class="p-4 md:p-5 pt-0"><div class="bg-slate-50 border border-slate-200 rounded-xl p-4 relative overflow-hidden"><div class="absolute left-0 top-0 bottom-0 w-1 bg-[#0F172A]"></div><p class="text-[13.5px] leading-relaxed text-slate-700"><span class="font-bold text-[#0F172A]">Summary:</span> '+ins.summary+'</p><div class="flex items-center gap-2 mt-3 text-[11px] text-slate-500"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Based on live mock P/E, volume & '+state.timeframe+' price action • Not financial advice</div></div>'
  +'<div class="grid md:grid-cols-3 gap-3 mt-3">'+ins.bullets.map(b=>'<div class="border border-slate-200 rounded-xl p-3.5 bg-white hover:border-slate-300 transition-colors"><div class="flex items-center gap-2 mb-1.5"><div class="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center"><i data-lucide="'+b.icon+'" class="w-3.5 h-3.5 text-slate-700"></i></div><span class="text-[12px] font-bold">'+b.title+'</span></div><p class="text-[12px] leading-relaxed text-slate-600">'+b.text+'</p></div>').join('')+'</div>'
  +(!ins.single?'<div class="flex flex-wrap items-center gap-2 mt-3"><span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Verdict:</span><span class="inline-flex items-center gap-1.5 text-[12px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="dollar-sign" class="w-3.5 h-3.5"></i> Value Pick: '+ins.valuePick+'</span><span class="inline-flex items-center gap-1.5 text-[12px] font-bold bg-[#0F172A] text-white px-2.5 py-1 rounded-full"><i data-lucide="rocket" class="w-3.5 h-3.5"></i> Momentum: '+ins.momentumPick+'</span><span class="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full"><i data-lucide="gauge" class="w-3.5 h-3.5"></i> Basket Risk: '+ins.risk+'</span><div class="ml-auto flex items-center gap-2"><button data-action="copy-ai" class="flex items-center gap-1.5 text-[12px] font-bold text-slate-600 border border-slate-200 px-2.5 py-1.5 rounded-lg hover:bg-slate-50"><i data-lucide="copy" class="w-3.5 h-3.5 pointer-events-none"></i> Copy</button><button data-action="regen-ai" class="flex items-center gap-1.5 text-[12px] font-bold bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700"><i data-lucide="refresh-cw" class="w-3.5 h-3.5 pointer-events-none"></i> Regenerate</button></div></div>':'')
  +'</div>';
  if(window.lucide) lucide.createIcons();
}

// ================= INTERACTIVE PANELS / TABS =================
function escapeHTML(value){
  return String(value ?? '').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}
function openModal(eyebrow,title,body){
  const modal=document.getElementById('appModal'), ey=document.getElementById('appModalEyebrow'), ti=document.getElementById('appModalTitle'), bd=document.getElementById('appModalBody');
  if(!modal||!ey||!ti||!bd) return;
  ey.textContent=eyebrow||''; ti.textContent=title||''; bd.innerHTML=body||'';
  modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('overflow-hidden');
  if(window.lucide) lucide.createIcons();
}
function closeModal(){
  const modal=document.getElementById('appModal'); if(!modal) return;
  modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('overflow-hidden');
}
function setActiveNav(tab){
  document.querySelectorAll('.nav-tab').forEach(btn=>{
    const active=btn.dataset.tab===tab;
    btn.classList.toggle('bg-slate-100',active);
    btn.classList.toggle('border',active);
    btn.classList.toggle('border-slate-200',active);
    btn.classList.toggle('font-bold',active);
    btn.classList.toggle('text-[#0F172A]',active);
    btn.classList.toggle('font-semibold',!active);
    btn.classList.toggle('text-slate-500',!active);
  });
}
function openOverview(){
  const gainers=[...STOCKS_DB].sort((a,b)=>((b.price-b.prevClose)/b.prevClose)-((a.price-a.prevClose)/a.prevClose)).slice(0,3);
  const totalSelected=state.selected.length;
  openModal('MARKET DASHBOARD','Overview',
    '<div class="p-4 md:p-5">'
    +'<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">'
    +INDICES.slice(0,3).map(ix=>'<div class="rounded-xl border border-slate-200 bg-slate-50/60 p-4"><div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">'+escapeHTML(ix.symbol)+'</div><div class="text-[21px] font-extrabold mt-1 tabular-nums">'+ix.value.toLocaleString('en-US',{minimumFractionDigits:2})+'</div><div class="text-[12px] font-bold mt-1 '+(ix.chg>=0?'text-emerald-600':'text-red-500')+'">'+(ix.chg>=0?'+':'')+ix.chg.toFixed(2)+'%</div></div>').join('')
    +'</div><div class="mt-5 grid lg:grid-cols-[1fr_1fr] gap-5">'
    +'<div class="border border-slate-200 rounded-xl overflow-hidden"><div class="px-4 py-3 border-b border-slate-100 font-bold text-[13px]">Top movers</div><div class="p-3">'+gainers.map(s=>'<div class="flex items-center gap-3 py-2"><div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style="background:'+s.logoBg+'">'+escapeHTML(s.name.charAt(0))+'</div><div class="min-w-0 flex-1"><div class="font-mono font-bold text-[12px]">'+escapeHTML(s.ticker)+'</div><div class="text-[11px] text-slate-500 truncate">'+escapeHTML(s.name)+'</div></div><div class="text-right"><div class="font-bold tabular-nums text-[12px]">'+formatPriceStr(s)+'</div><div class="font-bold text-[11px] text-emerald-600">+'+((s.price-s.prevClose)/s.prevClose*100).toFixed(2)+'%</div></div><button data-action="add-stock" data-ticker="'+s.ticker+'" class="w-7 h-7 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 flex items-center justify-center"><i data-lucide="plus" class="w-3.5 h-3.5 pointer-events-none"></i></button></div>').join('')+'</div></div>'
    +'<div class="border border-slate-200 rounded-xl p-4"><div class="text-[13px] font-bold">Current workspace</div><p class="text-[12px] text-slate-500 mt-1">'+totalSelected+'/10 stocks are selected for comparison. Watchlist contains '+watchlist.size+' stock'+(watchlist.size===1?'':'s')+'.</p><div class="mt-4 flex flex-wrap gap-2">'+(state.selected.length?state.selected.map(t=>'<span class="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded-lg">'+escapeHTML(t)+'</span>').join(''):'<span class="text-[12px] text-slate-500">No stocks selected.</span>')+'</div><button data-action="nav-tab" data-tab="comparator" class="mt-5 w-full bg-[#0F172A] text-white text-[12px] font-bold py-2.5 rounded-lg hover:bg-slate-800">Open Comparator</button></div>'
    +'</div></div>');
}
function openScreener(){
  const sectors=[...new Set(STOCKS_DB.map(s=>s.sector.split('•')[0].trim()))].sort();
  openModal('STOCK SCREENER','Find stocks',
    '<div class="p-4 md:p-5">'
    +'<div class="grid md:grid-cols-4 gap-3">'
    +'<label class="text-[11px] font-bold text-slate-500">Exchange<select id="screenExchange" class="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] bg-white"><option value="ALL">All</option><option>NSE</option><option>NASDAQ</option></select></label>'
    +'<label class="text-[11px] font-bold text-slate-500">Sector<select id="screenSector" class="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px] bg-white"><option value="ALL">All</option>'+sectors.map(x=>'<option value="'+escapeHTML(x)+'">'+escapeHTML(x)+'</option>').join('')+'</select></label>'
    +'<label class="text-[11px] font-bold text-slate-500">Max P/E<input id="screenPE" type="number" min="0" step="0.1" placeholder="e.g. 30" class="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px]"></label>'
    +'<label class="text-[11px] font-bold text-slate-500">Min Day %<input id="screenChg" type="number" step="0.1" placeholder="e.g. 0" class="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2 text-[12px]"></label>'
    +'</div><div class="mt-3 flex justify-end"><button data-action="run-screener" class="bg-[#0F172A] text-white text-[12px] font-bold px-4 py-2 rounded-lg hover:bg-slate-800">Apply filters</button></div>'
    +'<div id="screenerResults" class="mt-5"></div></div>');
  renderScreenerResults();
}
function renderScreenerResults(){
  const wrap=document.getElementById('screenerResults'); if(!wrap) return;
  const ex=(document.getElementById('screenExchange')?.value||'ALL'), sec=(document.getElementById('screenSector')?.value||'ALL');
  const peRaw=parseFloat(document.getElementById('screenPE')?.value||''); const chgRaw=parseFloat(document.getElementById('screenChg')?.value||'');
  const results=STOCKS_DB.filter(s=>{
    const chg=(s.price-s.prevClose)/s.prevClose*100;
    return (ex==='ALL'||s.exchange===ex)&&(sec==='ALL'||s.sector.split('•')[0].trim()===sec)&&(Number.isNaN(peRaw)||s.pe<=peRaw)&&(Number.isNaN(chgRaw)||chg>=chgRaw);
  }).sort((a,b)=>((b.price-b.prevClose)/b.prevClose)-((a.price-a.prevClose)/a.prevClose));
  wrap.innerHTML='<div class="flex items-center justify-between mb-2"><div class="text-[12px] font-bold">'+results.length+' matching stock'+(results.length===1?'':'s')+'</div><div class="text-[11px] text-slate-400">Sorted by day change</div></div>'+(results.length?'<div class="border border-slate-200 rounded-xl overflow-hidden"><div class="max-h-[48vh] overflow-y-auto">'+results.map(s=>{ const chg=(s.price-s.prevClose)/s.prevClose*100; const sel=state.selected.includes(s.ticker); return '<div class="flex items-center gap-3 p-3 border-b border-slate-100 last:border-0 hover:bg-slate-50/60"><div class="w-8 h-8 rounded-lg text-white flex items-center justify-center text-[11px] font-bold shrink-0" style="background:'+s.logoBg+'">'+escapeHTML(s.name.charAt(0))+'</div><div class="min-w-0 flex-1"><div class="font-mono font-bold text-[12px]">'+escapeHTML(s.ticker)+'</div><div class="text-[11px] text-slate-500 truncate">'+escapeHTML(s.name)+' • '+escapeHTML(s.sector)+'</div></div><div class="text-right"><div class="text-[12px] font-bold tabular-nums">'+formatPriceStr(s)+'</div><div class="text-[11px] font-bold '+(chg>=0?'text-emerald-600':'text-red-500')+'">'+(chg>=0?'+':'')+chg.toFixed(2)+'%</div></div><button data-action="'+(sel?'remove-stock':'screener-add')+'" data-ticker="'+s.ticker+'" class="text-[11px] font-bold px-2.5 py-1.5 rounded-lg border '+(sel?'border-red-200 text-red-600 hover:bg-red-50':'border-slate-200 text-slate-700 hover:bg-slate-50')+'">'+(sel?'Remove':'Compare')+'</button><button data-action="toggle-watch" data-ticker="'+s.ticker+'" class="w-8 h-8 rounded-lg border border-slate-200 '+(watchlist.has(s.ticker)?'text-amber-500 bg-amber-50':'text-slate-500 hover:bg-slate-50')+' flex items-center justify-center"><i data-lucide="star" class="w-3.5 h-3.5 pointer-events-none '+(watchlist.has(s.ticker)?'fill-current':'')+'"></i></button></div>';}).join('')+'</div></div>':'<div class="p-8 border border-dashed border-slate-300 rounded-xl text-center text-[12px] text-slate-500">No stocks match these filters.</div>');
  if(window.lucide) lucide.createIcons();
}
function openWatchlist(){
  openModal('PORTFOLIO TOOLS','Watchlist', '<div class="p-4 md:p-5"><div id="watchlistPanel"></div></div>'); renderWatchlistPanel();
}
function renderWatchlistPanel(){
  const wrap=document.getElementById('watchlistPanel'); if(!wrap) return;
  const stocks=STOCKS_DB.filter(s=>watchlist.has(s.ticker));
  wrap.innerHTML=stocks.length?'<div class="space-y-2">'+stocks.map(s=>{ const chg=(s.price-s.prevClose)/s.prevClose*100; return '<div class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl"><div class="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[12px] font-bold shrink-0" style="background:'+s.logoBg+'">'+escapeHTML(s.name.charAt(0))+'</div><div class="min-w-0 flex-1"><div class="font-mono font-bold text-[12px]">'+escapeHTML(s.ticker)+'</div><div class="text-[11px] text-slate-500 truncate">'+escapeHTML(s.name)+'</div></div><div class="text-right"><div class="font-bold text-[12px] tabular-nums">'+formatPriceStr(s)+'</div><div class="font-bold text-[11px] '+(chg>=0?'text-emerald-600':'text-red-500')+'">'+(chg>=0?'+':'')+chg.toFixed(2)+'%</div></div><button data-action="add-stock" data-ticker="'+s.ticker+'" class="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800">Compare</button><button data-action="toggle-watch" data-ticker="'+s.ticker+'" class="w-8 h-8 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 flex items-center justify-center"><i data-lucide="star" class="w-3.5 h-3.5 fill-current pointer-events-none"></i></button></div>'; }).join('')+'</div>':'<div class="text-center p-10 border border-dashed border-slate-300 rounded-xl"><div class="font-bold text-[13px]">Your watchlist is empty</div><div class="text-[12px] text-slate-500 mt-1">Use the star button on a stock card to save it here.</div></div>';
  const wc=document.getElementById('watchCount'); if(wc) wc.textContent=watchlist.size; if(window.lucide) lucide.createIcons();
}
function openNews(){
  openModal('MARKET INTELLIGENCE','News & Filings','<div class="p-4 md:p-5"><div class="space-y-2">'+NEWS.map((n,i)=>'<button data-action="open-news" data-news-index="'+i+'" class="w-full text-left border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors"><div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span class="text-slate-600">'+escapeHTML(n.source)+'</span><span>•</span><span>'+escapeHTML(n.time)+'</span></div><div class="text-[13px] font-bold leading-snug mt-1.5">'+escapeHTML(n.headline)+'</div><div class="flex gap-1.5 mt-2 flex-wrap">'+n.tickers.map(t=>'<span class="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">'+escapeHTML(t)+'</span>').join('')+'</div></button>').join('')+'</div></div>');
}
function openNewsArticle(index){
  const n=NEWS[Number(index)]; if(!n) return;
  openModal(n.source.toUpperCase(),'News story', '<div class="p-4 md:p-6"><div class="text-[11px] font-bold text-slate-400">'+escapeHTML(n.time)+'</div><h3 class="text-[20px] md:text-[24px] font-extrabold leading-tight mt-2">'+escapeHTML(n.headline)+'</h3><div class="flex gap-1.5 mt-4 flex-wrap">'+n.tickers.map(t=>'<button data-action="add-stock" data-ticker="'+escapeHTML(t)+'" class="text-[11px] font-mono font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-lg">'+escapeHTML(t)+' • Compare</button>').join('')+'</div><div class="mt-6 border border-slate-200 rounded-xl p-4 bg-slate-50/60 text-[13px] leading-relaxed text-slate-600">This prototype stores article headlines locally. In a production build, this panel would open the source article URL or load the full story from a news API.</div><button data-action="nav-tab" data-tab="comparator" class="mt-4 bg-[#0F172A] text-white text-[12px] font-bold px-4 py-2.5 rounded-lg">Back to Comparator</button></div>');
}
function openAlerts(){
  const entries=[...alerts.entries()];
  openModal('ALERT CENTER','Price alerts', '<div class="p-4 md:p-5"><div class="text-[12px] text-slate-500 mb-4">Alerts are stored for this browser session and update against the simulated live price feed.</div><div class="space-y-2">'+(entries.length?entries.map(([t,a])=>{const s=getStock(t); return '<div class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl"><div class="min-w-0 flex-1"><div class="font-mono text-[12px] font-bold">'+escapeHTML(t)+'</div><div class="text-[11px] text-slate-500">Trigger '+escapeHTML(a.rule)+' • Current '+formatPriceStr(s)+'</div></div><button data-action="remove-alert" data-ticker="'+escapeHTML(t)+'" class="text-[11px] font-bold text-red-600 border border-red-200 px-2.5 py-1.5 rounded-lg hover:bg-red-50">Remove</button></div>';}).join(''):'<div class="p-8 border border-dashed border-slate-300 rounded-xl text-center"><div class="font-bold text-[13px]">No active alerts</div><div class="text-[12px] text-slate-500 mt-1">Use Alert on a stock card to create one.</div></div>')+'</div></div>');
}
function createAlert(ticker){
  const s=getStock(ticker); if(!s) return;
  const defaultTarget=(s.price*1.03).toFixed(2);
  openModal('CREATE ALERT',ticker,'<div class="p-4 md:p-5"><div class="text-[12px] text-slate-500">Set a simple price alert for '+escapeHTML(s.name)+'.</div><label class="block text-[11px] font-bold text-slate-500 mt-4">Trigger price<input id="alertPrice" type="number" step="0.01" value="'+defaultTarget+'" class="mt-1.5 w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] font-mono"></label><div class="mt-4 flex gap-2"><button data-action="save-alert" data-ticker="'+escapeHTML(ticker)+'" class="flex-1 bg-[#0F172A] text-white text-[12px] font-bold py-2.5 rounded-lg hover:bg-slate-800">Save alert</button><button data-action="close-modal" class="flex-1 bg-white border border-slate-200 text-slate-700 text-[12px] font-bold py-2.5 rounded-lg">Cancel</button></div></div>');
}
function openAnalyze(ticker){
  const s=getStock(ticker); if(!s) return;
  const pct=(s.price-s.prevClose)/s.prevClose*100, volR=s.volume/s.avgVolume;
  openModal('STOCK ANALYSIS',s.name,'<div class="p-4 md:p-5"><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">'+[
    ['Price',formatPriceStr(s)],['Day change',(pct>=0?'+':'')+pct.toFixed(2)+'%'],['P/E',s.pe.toFixed(1)+'x'],['Market cap',formatMCap(s)],['Volume',formatVolume(s.volume)],['Vol ratio',volR.toFixed(2)+'x'],['52W position',((s.price-s.low)/(s.high-s.low)*100).toFixed(1)+'%'],['Beta',s.beta.toFixed(2)]
  ].map(([k,v])=>'<div class="rounded-xl border border-slate-200 bg-slate-50/60 p-3"><div class="text-[10px] uppercase tracking-wider font-bold text-slate-400">'+escapeHTML(k)+'</div><div class="text-[16px] font-extrabold tabular-nums mt-1 '+(k==='Day change'?(pct>=0?'text-emerald-600':'text-red-500'):'')+'">'+escapeHTML(v)+'</div></div>').join('')+'</div><div class="mt-5 border border-slate-200 rounded-xl p-4"><div class="text-[13px] font-bold">Performance context</div><div class="text-[12px] text-slate-500 mt-1">Current timeframe: '+escapeHTML(state.timeframe)+' • Chart mode: '+escapeHTML(state.chartMode==='pct'?'% Return':'Price')+'</div><div class="mt-4 flex gap-2"><button data-action="add-stock" data-ticker="'+escapeHTML(ticker)+'" class="bg-[#0F172A] text-white text-[12px] font-bold px-3 py-2 rounded-lg">Add to Comparator</button><button data-action="toggle-watch" data-ticker="'+escapeHTML(ticker)+'" class="bg-white border border-slate-200 text-slate-700 text-[12px] font-bold px-3 py-2 rounded-lg">'+(watchlist.has(ticker)?'Remove from Watchlist':'Add to Watchlist')+'</button></div></div></div>');
}
function openApiDocs(){
  openModal('DEVELOPER TOOLS','Integration docs','<div class="p-4 md:p-5 space-y-4"><div class="border border-slate-200 rounded-xl p-4"><div class="text-[12px] font-bold">Quote endpoint</div><div class="mt-2 flex items-center gap-2"><code id="apiEndpoint" class="flex-1 bg-slate-950 text-emerald-300 text-[11px] font-mono rounded-lg px-3 py-2 overflow-x-auto">GET /api/quote?symbol=RELIANCE.NS,AAPL</code><button data-action="copy-text" data-copy-target="apiEndpoint" class="px-3 py-2 rounded-lg border border-slate-200 text-[11px] font-bold">Copy</button></div></div><div class="border border-slate-200 rounded-xl p-4"><div class="text-[12px] font-bold">Suggested response schema</div><pre class="mt-2 bg-slate-950 text-slate-200 rounded-lg p-3 overflow-x-auto text-[11px] leading-relaxed">{\n  "symbol": "AAPL",\n  "price": 232.87,\n  "currency": "USD",\n  "changePercent": 1.19\n}</pre></div><div class="grid sm:grid-cols-3 gap-2"><div class="border border-slate-200 rounded-lg p-3 text-[11px]"><b>Twelve Data</b><div class="text-slate-500 mt-1">Quotes + time series</div></div><div class="border border-slate-200 rounded-lg p-3 text-[11px]"><b>Alpha Vantage</b><div class="text-slate-500 mt-1">Fundamentals + quotes</div></div><div class="border border-slate-200 rounded-lg p-3 text-[11px]"><b>Yahoo Finance</b><div class="text-slate-500 mt-1">Market reference data</div></div></div></div>');
}
function openUpgrade(){
  openModal('STOCKLENS PRO','Upgrade','<div class="p-4 md:p-5"><div class="grid md:grid-cols-3 gap-3">'+[
    ['Starter','₹0','Mock data','Basic comparator'],['Pro','₹999/mo','Live API connectors','Advanced alerts'],['Desk','₹2,499/mo','Multi-user workspace','Priority data refresh']
  ].map((x,i)=>'<div class="border '+(i===1?'border-[#0F172A] ring-1 ring-[#0F172A]':'border-slate-200')+' rounded-xl p-4"><div class="text-[13px] font-bold">'+x[0]+'</div><div class="text-[22px] font-extrabold mt-2">'+x[1]+'</div><div class="text-[11px] text-slate-500 mt-2">'+x[2]+'</div><div class="text-[11px] text-slate-500 mt-1">'+x[3]+'</div><button data-action="activate-demo" class="w-full mt-4 text-[11px] font-bold '+(i===1?'bg-[#0F172A] text-white':'border border-slate-200 text-slate-700')+' px-3 py-2 rounded-lg">'+(i===0?'Keep Starter':'Try demo')+'</button></div>').join('')+'</div><div class="text-[11px] text-slate-400 mt-4">Billing is not connected in this prototype; the buttons activate the corresponding demo state only.</div></div>');
}
function openSimpleInfo(kind){
  const data={methodology:['METHODOLOGY','How the comparator works','Prices and fundamentals in this prototype come from the local STOCKS_DB dataset. Performance series are deterministic mock histories derived from the selected ticker and timeframe, while the Live toggle simulates small price/volume movements every 2.4 seconds.'],disclosures:['DISCLOSURES','Prototype disclosure','This interface is for design and engineering validation. The market data shown is simulated and must not be treated as financial advice or a live market feed.'],status:['SYSTEM','API status','UI components and simulated market logic are running locally in the browser. External market data is not connected yet. The integration panel shows the intended API contract.']}[kind];
  if(!data) return; openModal(data[0],data[1],'<div class="p-5 text-[13px] leading-relaxed text-slate-600">'+escapeHTML(data[2])+'</div>');
}
function copyText(value){
  const done=()=>showToast('Copied to clipboard','success');
  if(navigator.clipboard?.writeText) navigator.clipboard.writeText(value).then(done).catch(()=>showToast('Copy failed','error'));
  else { const ta=document.createElement('textarea'); ta.value=value; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy');done();}catch(e){showToast('Clipboard not available','warning')} ta.remove(); }
}

// ================= SIDEBAR =================
function renderIndices(){
  const wrap=document.getElementById('indicesList'); if(!wrap) return;
  wrap.innerHTML=INDICES.map((ix,i)=>{
    const pos=ix.chg>=0;
    return '<div class="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0"><div><div class="text-[12px] font-bold">'+ix.symbol+'</div><div class="text-[10px] font-medium text-slate-400">'+ix.exchange+'</div></div><div class="text-right"><div id="idx-val-'+i+'" class="text-[13px] font-extrabold tabular-nums">'+ix.value.toLocaleString('en-US',{minimumFractionDigits:2})+'</div><div id="idx-chg-'+i+'" class="text-[11px] font-bold tabular-nums '+(pos?'text-emerald-600':'text-red-500')+'">'+(pos?'+':'')+ix.chg.toFixed(2)+'%</div></div></div>';
  }).join('');
}
function updateIndicesLive(){
  INDICES.forEach((ix,i)=>{
    const dr=(Math.random()-0.5)*0.0012; ix.value*=(1+dr); ix.chg+=dr*100*0.3;
    const v=document.getElementById('idx-val-'+i), c=document.getElementById('idx-chg-'+i);
    if(v) v.textContent=ix.value.toLocaleString('en-US',{minimumFractionDigits:2});
    if(c){ const pos=ix.chg>=0; c.textContent=(pos?'+':'')+ix.chg.toFixed(2)+'%'; c.className='text-[11px] font-bold tabular-nums '+(pos?'text-emerald-600':'text-red-500'); }
  });
}
function renderMovers(){
  const wrap=document.getElementById('moversList'); if(!wrap) return;
  const sorted=[...STOCKS_DB].sort((a,b)=>{
    const ca=(a.price-a.prevClose)/a.prevClose, cb=(b.price-b.prevClose)/b.prevClose;
    return state.moversTab==='gainers'?cb-ca:ca-cb;
  }).slice(0,4);
  wrap.innerHTML=sorted.map(s=>{
    const pct=(s.price-s.prevClose)/s.prevClose*100, pos=pct>=0, sel=state.selected.includes(s.ticker);
    return '<div class="flex items-center gap-2.5 py-2 border-b border-slate-50 last:border-0"><div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style="background:'+s.logoBg+'">'+s.name.charAt(0)+'</div><div class="min-w-0 flex-1"><div class="text-[12px] font-bold font-mono truncate">'+s.ticker+'</div><div class="text-[11px] text-slate-500 truncate">'+s.name+'</div></div><div class="text-right shrink-0"><div class="text-[12px] font-extrabold tabular-nums">'+(s.currency==='INR'?'₹':'$')+s.price.toLocaleString(s.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2})+'</div><div class="text-[11px] font-bold tabular-nums '+(pos?'text-emerald-600':'text-red-500')+'">'+(pos?'+':'')+pct.toFixed(2)+'%</div></div><button data-action="'+(sel?'remove-stock':'add-stock')+'" data-ticker="'+s.ticker+'" class="w-7 h-7 rounded-lg border '+(sel?'border-red-200 text-red-500 hover:bg-red-50':'border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#0F172A]')+' flex items-center justify-center transition-colors"><i data-lucide="'+(sel?'minus':'plus')+'" class="w-3.5 h-3.5 pointer-events-none"></i></button></div>';
  }).join('');
  if(window.lucide) lucide.createIcons();
}
function renderNews(){
  const wrap=document.getElementById('newsList'); if(!wrap) return;
  wrap.innerHTML=NEWS.map((n,i)=>'<button data-action="open-news" data-news-index="'+i+'" class="w-full text-left py-2.5 border-b border-slate-50 last:border-0 group cursor-pointer hover:bg-slate-50/60 rounded-lg px-1 transition-colors"><div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span class="text-slate-500">'+n.source+'</span><span>•</span><span>'+n.time+'</span></div><p class="text-[12.5px] font-semibold leading-snug mt-1 group-hover:text-slate-900 text-slate-700">'+n.headline+'</p><div class="flex gap-1.5 mt-1.5 flex-wrap">'+n.tickers.map(t=>'<span class="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">'+t+'</span>').join('')+'</div></button>').join('');
}

// ================= CLOCK / STATUS =================
function updateTimestamp(){
  try{
    const str='As of '+new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})+' IST';
    document.querySelectorAll('[data-timestamp]').forEach(el=>el.textContent=str);
    const clock=document.getElementById('istClock');
    if(clock) clock.textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false})+' • '+new Date().toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata',day:'numeric',month:'short'});
  }catch(e){}
}
function updateMarketStatus(){
  let nseOpen=true,nasOpen=false;
  try{
    const ist=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
    nseOpen=ist.getDay()!==0&&ist.getDay()!==6&&(ist.getHours()*60+ist.getMinutes()>=555&&ist.getHours()*60+ist.getMinutes()<=930);
    const et=new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
    nasOpen=et.getDay()!==0&&et.getDay()!==6&&(et.getHours()*60+et.getMinutes()>=570&&et.getHours()*60+et.getMinutes()<=960);
  }catch(e){}
  const nse=document.getElementById('nseStatus'), nas=document.getElementById('nasStatus'), dot=document.getElementById('liveDot'), lbl=document.getElementById('liveLabel');
  if(nse){ nse.innerHTML='<span class="w-1.5 h-1.5 rounded-full '+(nseOpen?'bg-emerald-500':'bg-amber-500')+'"></span> NSE '+(nseOpen?'• Open':'• Closed'); nse.className='flex items-center gap-1.5 text-[11px] font-bold px-2 py-1 rounded-full border '+(nseOpen?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-amber-50 text-amber-700 border-amber-200'); }
  if(nas){ nas.innerHTML='<span class="w-1.5 h-1.5 rounded-full '+(nasOpen?'bg-emerald-500':'bg-slate-400')+'"></span> NASDAQ '+(nasOpen?'• Open':'• Pre-Market'); nas.className='hidden sm:flex items-center gap-1.5 text-[11px] font-bold px-2 py-1 rounded-full border '+(nasOpen?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-slate-100 text-slate-600 border-slate-200'); }
  if(dot) dot.className='w-2 h-2 rounded-full '+(state.live?'bg-emerald-500 animate-pulse':'bg-slate-400');
  if(lbl) lbl.textContent=state.live?'Live Data':'Paused';
}

// ================= ACTIONS =================
function renderAll(){ renderSelectedPills(); renderPresetChips(); updateControlStates(); renderComparison(); updateChart(); renderMovers(); updateTimestamp(); updateMarketStatus(); }
function setSelection(arr,msg){ state.selected=[...new Set(arr)].filter(t=>getStock(t)).slice(0,10); renderAll(); if(msg) showToast(msg,'info'); }
function addStock(t){
  if(state.selected.includes(t)){ showToast(t+' already in comparison','warning'); return; }
  if(state.selected.length>=10){ showToast('Maximum 10 stocks — remove one to add','warning'); return; }
  state.selected.push(t); renderAll(); showToast(t+' added to comparison','success');
  const inp=document.getElementById('stockSearch'); if(inp) inp.value='';
}
function removeStock(t){ state.selected=state.selected.filter(x=>x!==t); renderAll(); }
function toggleWatch(t){ if(watchlist.has(t)){ watchlist.delete(t); showToast(t+' removed from watchlist','info'); } else { watchlist.add(t); showToast(t+' added to watchlist','success'); } renderCards(); const wc=document.getElementById('watchCount'); if(wc) wc.textContent=watchlist.size; if(document.getElementById('watchlistPanel')) renderWatchlistPanel(); }
function setPreset(id){ const p=PRESETS.find(x=>x.id===id); if(!p) return; state.selected=[...p.tickers]; renderAll(); showToast('Loaded preset: '+p.label,'success'); }
function exportCSV(){
  const rows=[
    ['Metric'].concat(state.selected),
    ['Company'].concat(state.selected.map(t=>getStock(t).name)),
    ['Exchange'].concat(state.selected.map(t=>getStock(t).exchange)),
    ['Price'].concat(state.selected.map(t=>formatPriceStr(getStock(t)))),
    ['Day Change %'].concat(state.selected.map(t=>((getStock(t).price-getStock(t).prevClose)/getStock(t).prevClose*100).toFixed(2)+'%')),
    ['Market Cap'].concat(state.selected.map(t=>formatMCap(getStock(t)))),
    ['P/E'].concat(state.selected.map(t=>getStock(t).pe.toFixed(2))),
    ['Volume'].concat(state.selected.map(t=>getStock(t).volume)),
    ['52W High'].concat(state.selected.map(t=>getStock(t).high)),
    ['52W Low'].concat(state.selected.map(t=>getStock(t).low)),
    ['Dividend Yield'].concat(state.selected.map(t=>getStock(t).divYield.toFixed(2)+'%')),
    ['Beta'].concat(state.selected.map(t=>getStock(t).beta))
  ];
  ['1D','1W','1M','6M','1Y'].forEach(tf=>{
    const r=[tf+' Return'];
    state.selected.forEach(t=>{ const h=getHistory(t,tf); r.push(((h.prices[h.prices.length-1]/h.prices[0]-1)*100).toFixed(2)+'%'); });
    rows.push(r);
  });
  const csv=rows.map(r=>r.map(c=>'"'+c+'"').join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv'}), url=URL.createObjectURL(blob), a=document.createElement('a');
  a.href=url; a.download='stock-comparison-'+Date.now()+'.csv'; a.click(); URL.revokeObjectURL(url);
  showToast('Comparison exported as CSV','success');
}
function exportChartPNG(){
  if(!chart){ showToast('No chart to export','warning'); return; }
  const a=document.createElement('a'); a.href=chart.toBase64Image('image/png',1); a.download='performance-'+state.timeframe+'.png'; a.click();
  showToast('Chart exported as PNG','success');
}
function copyAI(){
  const ins=generateAIInsight(); if(!ins) return;
  const text='StockLens AI Insight ('+state.selected.join(' vs ')+') — '+state.timeframe+'\n\n'+ins.summary+'\n\n'+ins.bullets.map(b=>'• '+b.title+': '+b.text).join('\n')+'\n\nValue Pick: '+(ins.valuePick||'-')+' | Momentum: '+(ins.momentumPick||'-');
  if(navigator.clipboard) navigator.clipboard.writeText(text).then(()=>showToast('AI summary copied to clipboard','success')).catch(()=>showToast('Copy failed','error'));
  else showToast('Clipboard not available','warning');
}

// ================= SEARCH =================
function setupSearch(){
  const input=document.getElementById('stockSearch'), drop=document.getElementById('searchDropdown');
  if(!input||!drop) return;
  input.addEventListener('input',()=>renderSearchDropdown(input.value));
  input.addEventListener('focus',()=>renderSearchDropdown(input.value));
  input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
      const q=input.value.toLowerCase().trim();
      const pool=STOCKS_DB.filter(s=>!state.selected.includes(s.ticker));
      const first=pool.find(s=>s.name.toLowerCase().includes(q)||s.ticker.toLowerCase().includes(q))||STOCKS_DB.find(s=>s.name.toLowerCase().includes(q)||s.ticker.toLowerCase().includes(q));
      if(first&&q){ addStock(first.ticker); input.value=''; renderSearchDropdown(''); }
    }
    if(e.key==='Escape'){ drop.classList.add('hidden'); input.blur(); }
  });
  document.addEventListener('click',(e)=>{ if(!e.target.closest('#searchWrap')) drop.classList.add('hidden'); });
  document.addEventListener('keydown',(e)=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){ e.preventDefault(); input.focus(); }
    if(e.key==='/'&&document.activeElement!==input){ e.preventDefault(); input.focus(); }
  });
}
function renderSearchDropdown(q){
  const drop=document.getElementById('searchDropdown'); if(!drop) return;
  const query=(q||'').toLowerCase().trim();
  const results=STOCKS_DB.filter(s=>{
    if(!query) return true;
    return s.name.toLowerCase().includes(query)||s.ticker.toLowerCase().includes(query)||s.sector.toLowerCase().includes(query)||s.exchange.toLowerCase().includes(query);
  }).slice(0,8);
  if(results.length===0){
    drop.innerHTML='<div class="p-4 text-center"><div class="text-[13px] font-semibold text-slate-700">No results for "'+q+'"</div><div class="text-[12px] text-slate-500 mt-1">Try Reliance, HDFC Bank, Bank or Auto</div></div>';
  } else {
    drop.innerHTML='<div class="p-2"><div class="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">'+(query?results.length+' result'+(results.length>1?'s':''):'Popular • NSE/BSE & MCX demo commodities')+' — '+state.selected.length+'/10 selected</div>'
    +results.map(s=>{
      const sel=state.selected.includes(s.ticker), pct=(s.price-s.prevClose)/s.prevClose*100, pos=pct>=0;
      return '<button data-action="'+(sel?'remove-stock':'add-stock')+'" data-ticker="'+s.ticker+'" class="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group"><div class="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] font-bold shrink-0" style="background:'+s.logoBg+'">'+s.name.charAt(0)+'</div><div class="min-w-0 flex-1"><div class="text-[13px] font-bold truncate pointer-events-none">'+s.name+'</div><div class="flex items-center gap-1.5 mt-0.5 pointer-events-none"><span class="text-[11px] font-mono font-bold text-slate-500">'+s.ticker+'</span><span class="text-[10px] font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">'+s.exchange+'</span><span class="text-[10px] text-slate-400 truncate hidden sm:inline">'+s.sector+'</span></div></div><div class="text-right shrink-0 pointer-events-none"><div class="text-[13px] font-extrabold tabular-nums">'+(s.currency==='INR'?'₹':'$')+s.price.toLocaleString(s.currency==='INR'?'en-IN':'en-US',{minimumFractionDigits:2})+'</div><div class="text-[11px] font-bold tabular-nums '+(pos?'text-emerald-600':'text-red-500')+'">'+(pos?'+':'')+pct.toFixed(2)+'%</div></div><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 pointer-events-none '+(sel?'bg-emerald-100 text-emerald-700':'bg-slate-100 text-slate-500 group-hover:bg-[#0F172A] group-hover:text-white')+' transition-colors"><i data-lucide="'+(sel?'check':'plus')+'" class="w-4 h-4"></i></div></button>';
    }).join('')+'</div>';
  }
  drop.classList.remove('hidden');
  if(window.lucide) lucide.createIcons();
}

// ================= GLOBAL CLICK DELEGATION =================
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('[data-action]'); if(!btn) return;
  const action=btn.dataset.action;
  if(action==='add-stock'){ e.stopPropagation(); addStock(btn.dataset.ticker); const inp=document.getElementById('stockSearch'); if(inp) renderSearchDropdown(inp.value); return; }
  if(action==='remove-stock'){ removeStock(btn.dataset.ticker); const drop=document.getElementById('searchDropdown'), inp=document.getElementById('stockSearch'); if(drop&&!drop.classList.contains('hidden')&&inp) renderSearchDropdown(inp.value); return; }
  const drop=document.getElementById('searchDropdown'); if(drop) drop.classList.add('hidden');
  if(action==='toggle-watch') toggleWatch(btn.dataset.ticker);
  else if(action==='set-preset') setPreset(btn.dataset.preset);
  else if(action==='set-timeframe'){ state.timeframe=btn.dataset.tf; updateControlStates(); updateChart(); renderAI(); }
  else if(action==='set-curr'){ state.displayCurrency=btn.dataset.curr; updateControlStates(); renderAll(); showToast(btn.dataset.curr==='AUTO'?'Currency: Auto (native)':('Currency: '+(btn.dataset.curr==='INR'?'₹ INR — all values converted':'$ USD — all values converted')),'info'); }
  else if(action==='set-view'){ state.view=btn.dataset.view; updateControlStates(); renderComparison(); }
  else if(action==='set-mode'){ state.chartMode=btn.dataset.mode; updateControlStates(); updateChart(); }
  else if(action==='toggle-dataset'){ const idx=parseInt(btn.dataset.idx); if(chart){ if(chart.isDatasetVisible(idx)) chart.hide(idx); else chart.show(idx); renderLegend(); } }
  else if(action==='export-csv') exportCSV();
  else if(action==='export-chart') exportChartPNG();
  else if(action==='clear-all') setSelection([],'Selection cleared');
  else if(action==='reset-default') setSelection(['RELIANCE.NS','TCS.NS','INFY'],'Reset to default trio');
  else if(action==='copy-ai') copyAI();
  else if(action==='regen-ai'){ aiVariant++; renderAI(); showToast('AI insight regenerated','success'); }
  else if(action==='toggle-ai'){ state.aiOpen=!state.aiOpen; updateControlStates(); }
  else if(action==='focus-search'){ const inp=document.getElementById('stockSearch'); if(inp){ inp.focus(); try{inp.scrollIntoView({behavior:'smooth',block:'center'});}catch(e){} renderSearchDropdown(inp.value); } }
  else if(action==='movers-tab'){ state.moversTab=btn.dataset.tab; updateControlStates(); renderMovers(); }
  else if(action==='nav-tab'){
    const tab=btn.dataset.tab; setActiveNav(tab);
    if(tab==='comparator'){ closeModal(); document.getElementById('stockSearch')?.scrollIntoView({behavior:'smooth',block:'start'}); }
    else if(tab==='overview') openOverview();
    else if(tab==='screener') openScreener();
    else if(tab==='watchlist') openWatchlist();
    else if(tab==='news') openNews();
  }
  else if(action==='close-modal'){ closeModal(); }
  else if(action==='open-alerts'){ openAlerts(); }
  else if(action==='open-upgrade'){ openUpgrade(); }
  else if(action==='open-api-docs'){ openApiDocs(); }
  else if(action==='open-methodology'){ openSimpleInfo('methodology'); }
  else if(action==='open-disclosures'){ openSimpleInfo('disclosures'); }
  else if(action==='open-api-status'){ openSimpleInfo('status'); }
  else if(action==='analyze-stock'){ openAnalyze(btn.dataset.ticker); }
  else if(action==='set-alert'){ createAlert(btn.dataset.ticker); }
  else if(action==='save-alert'){ const price=parseFloat(document.getElementById('alertPrice')?.value); const ticker=btn.dataset.ticker; if(Number.isFinite(price)&&price>0){ alerts.set(ticker,{target:price,direction:price>=getStock(ticker).price?'above':'below',rule:(price>=getStock(ticker).price?'Above ':'Below ')+formatPriceStr({...getStock(ticker),price})}); closeModal(); showToast('Price alert saved for '+ticker,'success'); } else showToast('Enter a valid alert price','warning'); }
  else if(action==='remove-alert'){ alerts.delete(btn.dataset.ticker); openAlerts(); showToast('Alert removed','info'); }
  else if(action==='open-news'){ openNewsArticle(btn.dataset.newsIndex); }
  else if(action==='screener-add'){ addStock(btn.dataset.ticker); renderScreenerResults(); }
  else if(action==='run-screener'){ renderScreenerResults(); }
  else if(action==='copy-text'){ const target=document.getElementById(btn.dataset.copyTarget); if(target) copyText(target.textContent); }
  else if(action==='activate-demo'){ state.live=true; const toggle=document.getElementById('liveToggle'); if(toggle) toggle.checked=true; updateMarketStatus(); closeModal(); showToast('Demo plan activated — live simulation enabled','success'); }
});

const modal=document.getElementById('appModal');
if(modal){
  document.getElementById('appModalBackdrop')?.addEventListener('click',closeModal);
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!modal.classList.contains('hidden')) closeModal(); });
}


// ================= LIVE TICK =================
function tickLive(){
  if(!state.live) return;
  tickCount++;
  STOCKS_DB.forEach(s=>{
    const bias=s.beta>1.5?1.6:1, dr=(Math.random()-0.485)*0.0022*bias;
    s._lastPrice=s.price; s.price=Math.max(s.price*(1+dr),1);
    s.volume+=Math.floor(Math.random()*8000*(s.currency==='INR'?1:5));
  });
  alerts.forEach((a,ticker)=>{
    const s=getStock(ticker); if(!s || a.triggered) return;
    const hit=a.direction==='above' ? s.price>=a.target : s.price<=a.target;
    if(hit){ a.triggered=true; showToast('Alert triggered: '+ticker+' reached '+formatPriceStr({...s,price:a.target}),'success'); }
  });
  state.selected.forEach(t=>{
    const s=getStock(t), did=t.replace(/[^a-z0-9]/gi,'-');
    const priceEl=document.getElementById('price-'+did);
    if(priceEl){
      const disp=getDisplayPrice(s), sym=disp.currency==='INR'?'₹':'$', loc=disp.currency==='INR'?'en-IN':'en-US';
      priceEl.textContent=sym+disp.value.toLocaleString(loc,{minimumFractionDigits:2,maximumFractionDigits:2});
      priceEl.classList.remove('flash-up','flash-down'); void priceEl.offsetWidth;
      priceEl.classList.add(s.price>=(s._lastPrice||s.price)?'flash-up':'flash-down');
      const pct=(s.price-s.prevClose)/s.prevClose*100, pos=pct>=0;
      const chgEl=document.getElementById('chg-'+did);
      if(chgEl){ chgEl.className='inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-md tabular-nums '+(pos?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-600'); chgEl.textContent=(pos?'▲ +':'▼ ')+pct.toFixed(2)+'%'; }
      const prevD=getDisplayPriceForValue(s.prevClose,s.currency), diff=disp.value-prevD.value;
      const absEl=document.getElementById('chgAbs-'+did);
      if(absEl){ absEl.textContent=(diff>=0?'+':'')+sym+Math.abs(diff).toLocaleString(loc,{minimumFractionDigits:2})+' today'; absEl.className='text-[11px] font-semibold tabular-nums '+(diff>=0?'text-emerald-600':'text-red-500'); }
      const volEl=document.getElementById('vol-'+did);
      if(volEl) volEl.textContent=formatVolume(s.volume);
    }
  });
  updateTickerTapePrices(); updateIndicesLive(); updateTimestamp();
  if(chart&&state.selected.length>0){
    state.selected.forEach((t,idx)=>{
      const s=getStock(t), key=t+'_'+state.timeframe, cached=histCache[key];
      if(cached){
        cached.prices[cached.prices.length-1]=s.price;
        const ds=chart.data.datasets[idx];
        if(ds){
          if(state.chartMode==='pct'){ const base=cached.prices[0]; ds.data[ds.data.length-1]=((s.price/base-1)*100); }
          else { ds.data[ds.data.length-1]=getDisplayPriceForValue(s.price,s.currency).value; }
        }
      }
    });
    chart.update('none');
    if(tickCount%3===0) renderLegend();
    if(tickCount%4===0){ renderReturnsTable(); renderMovers(); }
    if(tickCount%8===0) renderComparison();
  }
}

// ================= INIT =================
function init(){
  STOCKS_DB.forEach(s=>s._lastPrice=s.price);
  renderTickerTape(); setupSearch(); renderAll(); renderIndices(); renderNews(); renderMovers();
  const t=document.getElementById('liveToggle');
  if(t){ t.checked=state.live; t.addEventListener('change',()=>{ state.live=t.checked; updateMarketStatus(); showToast(state.live?'Live feed resumed — ticking every 2.4s':'Live feed paused — data frozen',state.live?'success':'warning'); }); }
  updateTimestamp(); updateMarketStatus(); setActiveNav('comparator');
  if(window.lucide) lucide.createIcons();
  setInterval(tickLive,2400);
  setInterval(updateTimestamp,1000);
  setInterval(updateMarketStatus,30000);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
