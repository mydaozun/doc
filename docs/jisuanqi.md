<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>利润计算器</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        label, input, button {
            margin: 10px;
            font-size: 16px;
        }
        input {
            padding: 5px;
        }
        button {
            padding: 8px 12px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #result {
            margin-top: 20px;
            font-size: 18px;
        }
      .profit-positive {
            color: #ed00ff;
            font-weight: bold;
        }
      .profit-negative {
            color: #ffae00;
            font-weight: bold;
        }
      .buy-price {
            color: #008000;
        }
      .sell-price {
            color: #ff0000;
        }
      .balance {
            color: #ff0000;
        }
      .profit-percentage-positive {
            color: #ed00ff;
            font-weight: bold;
        }
      .profit-percentage-negative {
            color: #ffae00;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>利润计算器</h1>
    <div>
        <label for="buyAmount">买入金额 ($):</label>
        <input type="number" id="buyAmount" step="0.01" required>
    </div>
    <div>
        <label for="buyQuantity">买入数量:</label>
        <input type="number" id="buyQuantity" step="0.01" required>
    </div>
    <div>
        <label for="sellAmount">卖出金额 ($):</label>
        <input type="number" id="sellAmount" step="0.01" required>
    </div>
    <div>
        <label for="sellQuantity">卖出数量:</label>
        <input type="number" id="sellQuantity" step="0.01" required>
        <button id="maxQuantityButton">获取最大数量</button>
    </div>
    <div>
        <button id="calculateButton">计算利润</button>
    </div>
    <div id="result"></div>
    <script>
        document.getElementById('maxQuantityButton').onclick = function() {
            // 将卖出数量设置为买入数量，包括小数点后面的所有数据
            var buyQuantity = parseFloat(document.getElementById('buyQuantity').value);
            document.getElementById('sellQuantity').value = buyQuantity;
        };

        document.getElementById('calculateButton').onclick = function() {
            // 获取输入的买入金额
            var buyAmount = parseFloat(document.getElementById('buyAmount').value);
            // 获取输入的买入数量
            var buyQuantity = parseFloat(document.getElementById('buyQuantity').value);
            // 获取输入的卖出金额
            var sellAmount = parseFloat(document.getElementById('sellAmount').value);
            // 获取输入的卖出数量
            var sellQuantity = parseFloat(document.getElementById('sellQuantity').value);

            // 计算买入总成本
            var buyTotal = buyAmount * buyQuantity;
            // 计算卖出总收入
            var sellTotal = sellAmount * sellQuantity;
            // 计算利润
            var profit = sellTotal - buyTotal;
            // 计算利润百分比
            var profitPercent = ((sellTotal - buyTotal) / buyTotal) * 100;
            // 计算余额
            var balance = profit * 7.3;

            var resultText = '';
            resultText += '<p class="buy-price">买入价格: $' + buyTotal.toFixed(20) + '</p>';
            resultText += '<p class="sell-price">卖出价格: $' + sellTotal.toFixed(20) + '</p>';

            if (profit >= 0) {
                resultText += '<p class="profit-positive">你赚了: $' + profit.toFixed(20) + '</p>';
                resultText += '<p class="profit-percentage-positive">利润百分比: ' + profitPercent.toFixed(20) + '%</p>';
            } else {
                resultText += '<p class="profit-negative">你亏了: $' + profit.toFixed(20) + '</p>';
                resultText += '<p class="profit-percentage-negative">利润百分比: ' + profitPercent.toFixed(20) + '%</p>';
            }

            resultText += '<p class="balance">你的余额: ￥' + balance.toFixed(20) + '</p>';

            // 显示利润结果
            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = resultText;
        };
    </script>
</body>
</html>