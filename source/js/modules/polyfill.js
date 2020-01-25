// Øàãè àëãîðèòìà ECMA-262, 5-å èçäàíèå, 15.4.4.18
// Ññûëêà (en): http://es5.github.io/#x15.4.4.18
// Ññûëêà (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function (callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Ïîëîæèì O ðàâíûì ðåçóëüòàòó âûçîâà ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Ïîëîæèì lenValue ðàâíûì ðåçóëüòàòó âûçîâà âíóòðåííåãî ìåòîäà Get îáúåêòà O ñ àðãóìåíòîì "length".
    // 3. Ïîëîæèì len ðàâíûì ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Åñëè IsCallable(callback) ðàâåí false, âûêèíåì èñêëþ÷åíèå TypeError.
    // Ñìîòðèòå: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 5. Åñëè thisArg ïðèñóòñòâóåò, ïîëîæèì T ðàâíûì thisArg; èíà÷å ïîëîæèì T ðàâíûì undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Ïîëîæèì k ðàâíûì 0
    k = 0;

    // 7. Ïîêà k < len, áóäåì ïîâòîðÿòü
    while (k < len) {

      var kValue;

      // a. Ïîëîæèì Pk ðàâíûì ToString(k).
      //   Ýòî íåÿâíîå ïðåîáðàçîâàíèå äëÿ ëåâîñòîðîííåãî îïåðàíäà â îïåðàòîðå in
      // b. Ïîëîæèì kPresent ðàâíûì ðåçóëüòàòó âûçîâà âíóòðåííåãî ìåòîäà HasProperty îáúåêòà O ñ àðãóìåíòîì Pk.
      //   Ýòîò øàã ìîæåò áûòü îáúåäèí¸í ñ øàãîì c
      // c. Åñëè kPresent ðàâåí true, òî
      if (k in O) {

        // i. Ïîëîæèì kValue ðàâíûì ðåçóëüòàòó âûçîâà âíóòðåííåãî ìåòîäà Get îáúåêòà O ñ àðãóìåíòîì Pk.
        kValue = O[k];

        // ii. Âûçîâåì âíóòðåííèé ìåòîä Call ôóíêöèè callback ñ îáúåêòîì T â êà÷åñòâå çíà÷åíèÿ this è
        // ñïèñêîì àðãóìåíòîâ, ñîäåðæàùèì kValue, k è O.
        callback.call(T, kValue, k, O);
      }
      // d. Óâåëè÷èì k íà 1.
      k++;
    }
    // 8. Âåðí¸ì undefined.
  }
}
