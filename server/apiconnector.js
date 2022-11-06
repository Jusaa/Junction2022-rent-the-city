const axios = require('axios');

const {
    WOLT_API_KEY,
    MERCHANT_ID,
  } = require('./config')
  
const preBookItem = (itemName, lenderAddress, borrowerAddress) => {
  
}

const bookItemShipment = (itemName, lenderAddress, borrowerAddress, lenderName, borrowerName, lenderPhone, borrowerPhone, lenderComment, borrowerComment) => {
    return axios.post(`https://daas-public-api.development.dev.woltapi.com/merchants/${MERCHANT_ID}/delivery-order`,
        {
            "pickup": {
              "location": {
                  "formatted_address": lenderAddress
              },
              "comment": lenderComment,
              "contact_details": {
                "name": lenderName,
                "phone_number": lenderPhone,
                "send_tracking_link_sms": false
              }
            },
            "dropoff": {
              "location": {
                "formatted_address": borrowerAddress
              },
              "contact_details": {
                "name": borrowerName,
                "phone_number": borrowerPhone,
                "send_tracking_link_sms": false
              },
              "comment": borrowerComment
            },
            "customer_support": {
              "email": "info@liivijengi.fi",
              "phone_number": "+23243244223",
              "url": "https://lingering-sun-6207.fly.dev/"
            },
            "merchant_order_reference_id": `yoooo${new Date()}`,
            "is_no_contact": true,
            "contents": [
              {
                "count": 1,
                "description": itemName,
                "identifier": "12345",
                "tags": []
              }
            ],
            "tips": [],
            "min_preparation_time_minutes": 10,
            "scheduled_dropoff_time": null
          },
          {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WOLT_API_KEY}`
            }
          }
    );
}


const bookItemReturn = (itemName, lenderAddress, borrowerAddress, lenderName, borrowerName, lenderPhone, borrowerPhone, lenderComment, borrowerComment, returnTime) => {
  return axios.post(`https://daas-public-api.development.dev.woltapi.com/merchants/${MERCHANT_ID}/delivery-order`,
      {
          "pickup": {
            "location": {
                "formatted_address": borrowerAddress
            },
            "comment": borrowerComment,
            "contact_details": {
              "name": borrowerName,
              "phone_number": borrowerPhone,
              "send_tracking_link_sms": false
            }
          },
          "dropoff": {
            "location": {
              "formatted_address": lenderAddress
            },
            "contact_details": {
              "name": lenderName,
              "phone_number": lenderPhone,
              "send_tracking_link_sms": false
            },
            "comment": lenderComment
          },
          "customer_support": {
            "email": "string",
            "phone_number": "string",
            "url": "string"
          },
          "merchant_order_reference_id": `yoooo${new Date()}`,
          "is_no_contact": true,
          "contents": [
            {
              "count": 1,
              "description": itemName,
              "identifier": "12345",
              "tags": []
            }
          ],
          "tips": [],
          "min_preparation_time_minutes": 10,
          "scheduled_dropoff_time": returnTime
        },
        {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${WOLT_API_KEY}`
          }
        }
  );
}

module.exports = {
    bookItemShipment,
    preBookItem,
    bookItemReturn,
}