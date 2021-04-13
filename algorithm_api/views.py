from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from algorithm_api.utils import algorithm


@api_view(['POST'])
def algorithmApi(request):
    """Recibes the numbers from the user"""
    nums = request.data['numbers'].split(",")
    check = algorithm.verifyFormat(nums)

    if check:
        return Response({"index": algorithm.leftRigth(nums)})
    else:
        return Response({"error":"must be a number"},status=status.HTTP_400_BAD_REQUEST)
