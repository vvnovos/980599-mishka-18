// ���� ��������� ECMA-262, 5-� �������, 15.4.4.18
// ������ (en): http://es5.github.io/#x15.4.4.18
// ������ (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function (callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. ������� O ������ ���������� ������ ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. ������� lenValue ������ ���������� ������ ����������� ������ Get ������� O � ���������� "length".
    // 3. ������� len ������ ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. ���� IsCallable(callback) ����� false, ������� ���������� TypeError.
    // ��������: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 5. ���� thisArg ������������, ������� T ������ thisArg; ����� ������� T ������ undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. ������� k ������ 0
    k = 0;

    // 7. ���� k < len, ����� ���������
    while (k < len) {

      var kValue;

      // a. ������� Pk ������ ToString(k).
      //   ��� ������� �������������� ��� �������������� �������� � ��������� in
      // b. ������� kPresent ������ ���������� ������ ����������� ������ HasProperty ������� O � ���������� Pk.
      //   ���� ��� ����� ���� �������� � ����� c
      // c. ���� kPresent ����� true, ��
      if (k in O) {

        // i. ������� kValue ������ ���������� ������ ����������� ������ Get ������� O � ���������� Pk.
        kValue = O[k];

        // ii. ������� ���������� ����� Call ������� callback � �������� T � �������� �������� this �
        // ������� ����������, ���������� kValue, k � O.
        callback.call(T, kValue, k, O);
      }
      // d. �������� k �� 1.
      k++;
    }
    // 8. ����� undefined.
  };
}