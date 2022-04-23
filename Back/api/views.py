from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import TutorSerializer, TutorPhoneSerializer, StudentSerializer, StudentPhoneSerializer, \
    CourseSerializer, CourseTutorSerializer

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from .models import Tutor, Student, Course


class TutorView(APIView):
    def get(self, request):
        tutors = Tutor.objects.all()
        serializer = TutorSerializer(tutors, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TutorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def tutor_details(request, id):
    try:
        tutor = Tutor.objects.get(pk=id)
    except Tutor.DoesNotExist as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = TutorSerializer(tutor)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TutorSerializer(tutor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        tutor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def post_teacher_phone(request):
    serializer = TutorPhoneSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)


class StudentView(APIView):
    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


@api_view(['POST'])
def post_student_phone(request):
    serializer = StudentPhoneSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors)


class CourseView(APIView):
    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def course_details(request, id):
    try:
        course = Course.objects.get(pk=id)
    except Course.DoesNotExist as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CourseSerializer(course)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TutorSerializer(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def tutor_courses(request, id):
    if request.method == 'GET':
        courses = Tutor.objects.get(pk=id).courses.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        data = request.data
        data["tutor"] = id
        serializer = CourseTutorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


@api_view(['GET', 'POST'])
def course_tutors(request, id):
    if request.method == 'GET':
        tutors = Course.objects.get(pk=id).tutors.all()
        serializer = TutorSerializer(tutors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        data = request.data
        data["course"] = id
        serializer = CourseTutorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


