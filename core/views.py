from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def sum_of_digits(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        number = str(data.get('number', '0'))
        if not number.isdigit():
            return JsonResponse({'error': 'Invalid number'}, status=400)
        total = sum(int(digit) for digit in number)
        return JsonResponse({'sum': total})
