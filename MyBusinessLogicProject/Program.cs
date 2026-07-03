using System;
using System.Collections.Generic;

namespace MyBusinessLogicProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to My Business Logic Project!");
            // Read student ID
            Console.Write("Enter student ID: ");
            int studentId = int.Parse(Console.ReadLine());

            // Read student name
            Console.Write("Enter student name: ");
            string studentName = Console.ReadLine();

            // Read student type
            Console.Write("Enter student type (Standard, Management, Scholarship): ");
            string studentTypeText = Console.ReadLine();

            // Convert text into StudentType enum
            StudentType studentType =
                Enum.Parse<StudentType>(studentTypeText, true);

            // Create Student object from console values
            Student student = new Student
            {
                Id = studentId,
                Name = studentName,
                StudentType = studentType
            };

        }
        #region Classes
        public class StudentFee
        {
            StudentType StudentType { get; set; }
            public int StudentId { get; set; }

            public Term CurrentTerm { get; set; }
            public int MonthsLate { get; set; }
            public decimal Discount { get; set; }
            public decimal LateFee { get; set; }
            public decimal FinalFee { get; set; }
        }
        public class Student
        {
            public string? Name { get; set; }
            public StudentType StudentType { get; set; }
            public int Id { get; set; }
        }
        #region Enums
        public enum StudentType
        {
            Standard, Management, Scholarship
        }

        public enum Term
        {
            Fall, Spring, Summer
        }
        #endregion
        #endregion 


        #region Business Logic
        public class FeeCalculator
        {
            private decimal DefaultBaseFee = 15000m;
            private decimal ManagementSeatBaseFee = 30000m;
            private decimal LateFeePerMonth = 100m;
            
        }

        #endregion
    }
}