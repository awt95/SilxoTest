using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SilxoTest.Models
{
    public class Assessment
    {
        public int Id { get; set; }
        public string Answers { get; set; }

        public double Rating { get; set; }

    }
}
