from rest_framework import serializers

from .models import *


class TutorSerializer(serializers.ModelSerializer):
    phones = serializers.StringRelatedField(many=True, required=False)

    class Meta:
        model = Tutor
        fields = '__all__'


class TutorPhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorPhoneNumbers
        fields = '__all__'


class CourseSerializer(serializers.Serializer):
    url = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    price = serializers.IntegerField()
    info = serializers.CharField()

    def create(self, validated_data):
        return Course.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.url = validated_data.get('url', instance.url)
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.info = validated_data.get('info', instance.info)
        instance.save()
        return instance


class CourseTutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTutor
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodemodeUser
        fields = ['first_name', 'last_name', 'nickname', 'password', 'email']




class StudentPhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentPhoneNumbers
        fields = '__all__'


class StudentCourseTutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourseTutor
        fields = '__all__'


class StudentCourseCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourseComment
        fields = '__all__'

    def to_representation(self, instance):
        data = super(StudentCourseCommentSerializer, self).to_representation(instance)
        data['student'] = CodemodeUser.objects.get(
            pk=instance.student.pk).nickname
        data['course'] = Course.objects.get(pk=instance.course.pk).title
        return data


class MoneySerializer(serializers.Serializer):
    student_id = serializers.PrimaryKeyRelatedField(queryset=Money.objects.all())
    time = serializers.DateTimeField()
    type = serializers.BooleanField()
    message = serializers.CharField()
    status = serializers.CharField()

    def create(self, validated_data):
        return Money.objects.create(**validated_data)

    def update(self, instance, validated_data):
        pass