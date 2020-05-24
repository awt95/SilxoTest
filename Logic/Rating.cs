using Newtonsoft.Json;
using SilxoTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SilxoTest.Logic
{
    public class Rating
    {
        public static double calculateRating(Assessment assessment)
        {
            var answers = JsonConvert.DeserializeObject<Dictionary<string,string>>(assessment.Answers);
            double rating = 100;
            double weight = rating / answers.Count;

            // If don't own IT then reduce rating
            if (answers.TryGetValue("own_it", out string own_it)) 
            {
                if (own_it != "Yes") rating -= weight;
            }   else rating -= weight;

            // If support size < 5 reduce rating
            if (answers.TryGetValue("support_size", out string support_size))
            {
                if (int.TryParse(support_size, out int numSupport))
                {
                    if (numSupport < 5) rating -= weight;
                }   else rating -= weight;
            } else rating -= weight;

            // architecture diagrams
            if (answers.TryGetValue("documents", out string documents))
            {
                if (documents != "Yes") rating -= weight;
            }
            else rating -= weight;

            // hosting docs
            if (answers.TryGetValue("hosting_documents", out string hosting_documents))
            {
                if (hosting_documents != "Yes") rating -= weight;
            }
            else rating -= weight;

            // If don't have IT roadmap
            if (answers.TryGetValue("it_roadmap", out string it_roadmap))
            {
                if (it_roadmap != "Yes") rating -= weight;
            }
            else rating -= weight;

            // data breach incident
            if (answers.TryGetValue("data_breach", out string data_breach))
            {
                if (data_breach != "Yes") rating -= weight;
            }
            else rating -= weight;

            // incident runbook
            if (answers.TryGetValue("data_breach", out string incident_runbook))
            {
                if (incident_runbook != "Yes") rating -= weight;
            }
            else rating -= weight;

            return Math.Round(rating,1);
        }
    }
}
