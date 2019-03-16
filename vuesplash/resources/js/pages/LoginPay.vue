<template>
    <div id='container'>
    </div>
</template>

<script>

export default {
    name: "LoginPay",
    mounted() {
        const baseRequest = {
            apiVersion: 2,
            apiVersionMinor: 0
        };

        const tokenizationSpecification = {
            type: 'PAYMENT_GATEWAY',
            parameters: {
                'gateway': 'example',
                'gatewayMerchantId': 'exampleGatewayMerchantId'
            }
        };

        const allowedCardNetworks = ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"];
        const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
        const baseCardPaymentMethod = {
            type: 'CARD',
            parameters: {
                allowedAuthMethods: allowedCardAuthMethods,
                allowedCardNetworks: allowedCardNetworks
            }
        };

        const cardPaymentMethod = Object.assign(
            {},
            baseCardPaymentMethod,
            { tokenizationSpecification: tokenizationSpecification }
        );

        const paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});

        const isReadyToPayRequest = Object.assign({}, baseRequest);
        isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

        paymentsClient.isReadyToPay(isReadyToPayRequest)
            .then(function(response) {
                if (response.result) {
                    const button = paymentsClient.createButton({
                        onClick: () => console.log('TODO: click handler')
                    });
                    document.getElementById('container').appendChild(button);
                }
            })
            .catch(function(err) {
                console.error("現在のデバイスやブラウザで Google Pay API が指定の支払い方法としてサポートされていません。")
                console.error(err);
            });


        const paymentDataRequest = Object.assign({}, baseRequest);
        paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
        paymentDataRequest.transactionInfo = {
            totalPriceStatus: 'FINAL',
            totalPrice: '123.45',
            currencyCode: 'USD'
        };
        paymentDataRequest.merchantInfo = {
            merchantName: 'ねずみ小僧'
        };
        paymentsClient.loadPaymentData(paymentDataRequest)
            .then(function(paymentData){
                // process paymentData
            }).catch(function(err){
                // show error in developer console for debugging
                console.error(err);
            });
    }
}
</script>
