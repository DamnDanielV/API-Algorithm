from rest_framework import status
from rest_framework.test import APITestCase


class AlgorithmTesCase(APITestCase):

    def test_case_correct_data(self):
        """ Test response status for correct input """
        data = {"numbers": "2,3,5,7,1,9"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_case_string(self):
        """ Test response status for strings as input """
        data = {"numbers": "sdsdasdsd"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_case_empty(self):
        """ Test response status for empty string as input """
        data = {"numbers": ""}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_case_strings_numbers(self):
        """ Test response status for strings and numbers as input """
        data = {"numbers": "1,4,6,e,r,6,t,1"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_case_correct_data_2(self):
        """ Test number response for correct data """
        data = {"numbers": "2,3,5,7,1,9"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.data["index"], 3)

    def test_case_correct_data_3(self):
        """ Test number response for correct data """
        data = {"numbers": "1,3,5,7,8,9"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.data["index"], 0)

    def test_case_strings_2(self):
        """ Test JSON response for strings and numbers as input """
        data = {"numbers": "sddwwrer"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.data, {"error":"must be a number"})

    def test_case_strings_numbers2(self):
        """ Test JSON response for strings and numbers as input """
        data = {"numbers": "1,4,e,w,5,t"}
        response = self.client.post("/api/hi", data)
        self.assertEqual(response.data, {"error":"must be a number"})