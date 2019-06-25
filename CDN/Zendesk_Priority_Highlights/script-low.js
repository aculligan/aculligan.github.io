"use strict";var removeLowHighlight=function removeLowHighlight(){var $prevHighlightLow=$(".zph-ltp");$prevHighlightLow.removeClass("zph-ltp zph-hltd")};var applyLowHighlight=function applyLowHighlight(){var windowLanguage=$("html").attr("lang");var languageList=[{code:"bg",lang:"Bulgarian",priority:"Приоритет",low:"Нисък",normal:"Нормален",high:"Висок",urgent:"Спешен"},{code:"zh",lang:"Chinese Simplified",priority:"优先级",low:"低",normal:"正常",high:"高",urgent:"紧急"},{code:"cs",lang:"Czech",priority:"Priorita",low:"Nízká",normal:"Normální",high:"Vysoká",urgent:"Naléhavá"},{code:"da",lang:"Danish",priority:"Prioritet",low:"Lav",normal:"Normal",high:"Høj",urgent:"Haster"},{code:"nl",lang:"Dutch",priority:"Prioriteit",low:"Laag",normal:"Normaal",high:"Hoog",urgent:"Urgent"},{code:"en",lang:"English",priority:"Priority",low:"Low",normal:"Normal",high:"High",urgent:"Urgent"},{code:"fi",lang:"Finnish",priority:"Prioriteetti",low:"Matala",normal:"Normaali",high:"Korkea",urgent:"Kiireellinen"},{code:"fr",lang:"French",priority:"Priorité",low:"Basse",normal:"Normale",high:"Élevée",urgent:"Urgente"},{code:"de",lang:"German",priority:"Priorität",low:"Niedrig",normal:"Normal",high:"Hoch",urgent:"Dringend"},{code:"el",lang:"Greek",priority:"Προτεραιότητα",low:"Χαμηλή",normal:"Κανονική",high:"Υψηλή",urgent:"Επείγουσα"},{code:"hi",lang:"Hindi",priority:"प्राथमिकता",low:"निम्न",normal:"सामान्य",high:"उच्च",urgent:"अत्यावश्यक"},{code:"hu",lang:"Hungarian",priority:"Prioritás",low:"Alacsony",normal:"Normál",high:"Magas",urgent:"Sürgős"},{code:"id",lang:"Indonesian",priority:"Prioritas",low:"Rendah",normal:"Normal",high:"Tinggi",urgent:"Mendesak"},{code:"it",lang:"Italian",priority:"Priorità",low:"Bassa",normal:"Normale",high:"Alta",urgent:"Urgente"},{code:"ja",lang:"Japanese",priority:"優先度",low:"低",normal:"普通",high:"高",urgent:"緊急"},{code:"ko",lang:"Korean",priority:"우선 순위",low:"낮음",normal:"보통",high:"높음",urgent:"긴급"},{code:"no",lang:"Norwegian",priority:"Prioritet",low:"Lav",normal:"Normal",high:"Høy",urgent:"Haster"},{code:"pl",lang:"Polish",priority:"Priorytet",low:"Niski",normal:"Normalny",high:"Wysoki",urgent:"Pilny"},{code:"pt",lang:"Portuguese",priority:"Prioridade",low:"Baixa",normal:"Normal",high:"Alta",urgent:"Urgente"},{code:"ro",lang:"Romanian",priority:"Prioritate",low:"Scăzută",normal:"Normală",high:"Ridicată",urgent:"Urgentă"},{code:"ru",lang:"Russian",priority:"Приоритет",low:"Низкий",normal:"Нормальный",high:"Срочный",urgent:"Экстренный"},{code:"es",lang:"Spanish",priority:"Prioridad",low:"Baja",normal:"Normal",high:"Alta",urgent:"Urgente"},{code:"sv",lang:"Swedish",priority:"Prioritet",low:"Låg",normal:"Normal",high:"Hög",urgent:"Brådskande"},{code:"th",lang:"Thai",priority:"ลำดับความสำคัญ",low:"ต่ำ",normal:"ปกติ",high:"สูง",urgent:"ด่วน"},{code:"tr",lang:"Turkish",priority:"Öncelik",low:"Düşük",normal:"Normal",high:"Yüksek",urgent:"Acil"},{code:"uk",lang:"Ukrainian",priority:"Пріоритет",low:"Низький",normal:"Нормальний",high:"Високий",urgent:"Терміновий"},{code:"vi",lang:"Vietnamese",priority:"Ưu tiên",low:"Thấp",normal:"Bình thường",high:"Cao",urgent:"Khẩn cấp"}];var priorityInLanguage;var priorityLowInLanguage;var priorityNormalInLanguage;var priorityHighInLanguage;var priorityUrgentInLanguage;languageList.forEach(function(index){if(windowLanguage==index.code){priorityInLanguage=index.priority;priorityLowInLanguage=index.low;priorityNormalInLanguage=index.normal;priorityHighInLanguage=index.high;priorityUrgentInLanguage=index.urgent}});var $tableHeadRow=$("#main_panes > section.ember-view.main_panes.split_pane.flush_top.collapsible.filters > div.pane.right.section > div > div > div > div > div > table > thead > tr");var $tableHeadRowChildren=$tableHeadRow.children();var priorityItemIndex;$tableHeadRowChildren.each(function(index){var $thisRowChild=$(this);var childHeaderName=$thisRowChild.text();if(childHeaderName==priorityInLanguage){priorityItemIndex=index}});var $ticketRows=$("#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr");var fieldFound;var ticketsInView;$ticketRows.each(function(){var $thisRow=$(this);var $thisRowChildren=$thisRow.children();var $priorityCell=$thisRowChildren.eq(priorityItemIndex);var $priorityCellText=$priorityCell.text();fieldFound=$priorityCellText;if($thisRowChildren.length<4){ticketsInView=0}
if($priorityCellText==priorityLowInLanguage){$(this).addClass("zph-ltp zph-hltd")}});if(ticketsInView!==0&&fieldFound!==priorityLowInLanguage&&fieldFound!==priorityNormalInLanguage&&fieldFound!==priorityHighInLanguage&&fieldFound!==priorityUrgentInLanguage){console.log("%cZendesk Priority Highlights: Could not find Priority Field","color: red; font-size: 20px")}};$(document).ready(function(){if(window.location.href.indexOf("agent/filters")>0){removeLowHighlight();setTimeout(applyLowHighlight,1700)}});$("*").click(function(){if(window.location.href.indexOf("agent/filters")>0){removeLowHighlight();setTimeout(applyLowHighlight,1300)}});$(window).focus(function(){if(window.location.href.indexOf("agent/filters")>0){removeLowHighlight();setTimeout(applyLowHighlight,1300)}})
