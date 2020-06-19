import React, { Component as RC } from "react";
import BdayCalc from "../components/BdayCalc";
import Page from "../components/Page";
import Banner from "../components/Banner";


export default class Home extends RC {
  constructor(props) {
    super(props);
    this.state = {
      banner: '',
    }
  }
    componentDidMount() {
      this.setState({
        banner: (
          <Banner
            image='http://midbartherapy.com/wp-content/uploads/2017/02/about-banner-1.jpg'
          />
        ),
      })
    }
    render() {
      return(
        <div id="container">
        <Page banner={this.state.banner}>
          
          <BdayCalc />
          <br></br> 
          <article>
            <h5>The pink tax is one that only about half of the population is subject to. And they probably aren’t even aware of it. Are you paying the pink tax?</h5>

              <p>If you aren’t sure if you’re paying the pink tax, answer a few questions. Are you a woman? Do you buy women’s products like feminine hygiene items, women’s clothing, women’s razors, women’s body wash? If you answered “Yes” to any of those questions, then you are indeed paying the pink tax.</p>

              <p>Most of us have probably heard of the wage gap, that men earn more than women. Typically you’ll see it quoted that women make just <a href="https://www.payscale.com/data/gender-pay-gap" class="link" >$0.79 for every $1</a> a man makes. This is true, but it doesn’t tell the whole story.</p>

            <h5 id="quoteblk">What often gets lost in translation is what the uncontrolled wage gap truly represents — that women are less likely to hold high-level, high-paying jobs than men… This is what we call the opportunity gap.</h5>

              <p>It goes on…</p>

            <h5 id="quoteblk">The controlled gender pay gap, which controls for a number of factors so that the only differentiation between workers is their gender, shrunk by just $0.008 since 2015. Women now make $0.98 for every dollar an equivalent man makes.</h5>

              <div id="articleblk" className="what-is-the-pink-tax"><h5><b>What Is the Pink Tax?</b></h5>
                <p>The pink tax refers to the extra amount of money women pay for specific products or services. Sometimes you’ll see or hear it referred to as price discrimination or gender-pricing.</p>
              </div>

              <p>Frequently, especially when it comes to personal care products, <b>there is no difference</b> between the male version and the female version apart from different prices.</p>

              <p>The classic example is those cheap razors for sale in most drug stores. No fancy moisturizing strip, no rust-free titanium, just a single blade. The “men’s” version is blue, the “women’s” version is pink. That’s the only difference, the color. But inevitably, the women’s version is more expensive than the men’s.</p>

              <p>But examples abound, and plenty of them cost women a lot more than a few cents in the drug store.</p>

            <div className="pink-tax-statistics"><h5><b>Pink Tax Statistics</b></h5></div>

              <p>There has been a lot of research on the pink tax that found overall, women were paying more than men 42% of the time. <b>How much more?</b> About <a href="https://www.huffpost.com/entry/pink-tax-examples_l_5d24da77e4b0583e482850f0" class="link">$1,300</a> more a year in extra costs. That’s $1,300 that can’t go into a women’s <a href="https://www.listenmoneymatters.com/start-retirement-planning/" class="link">retirement</a> fund. And don’t forget, <a href="https://www.who.int/gho/women_and_health/mortality/situation_trends_life_expectancy/en/" class="link">women live longer than men</a>, so we need that <a href="https://www.listenmoneymatters.com/personal-capital-retirement-planner/" target="_blank" rel="nofollow" class="link">retirement money!&nbsp;</a></p>

              <p>The New York City Department of Consumer Affairs released a study comparing the prices of over 800 products. The goal of the study was to estimate the price differences male and female shoppers face when buying the same types of items.</p>

              <p><b>The results: Products for women and girls cost 7% more than comparable products for men and boys.</b></p>

              <ul>
                <li>7% more for toys and accessories</li>
                <li>4% more for children’s clothing</li>
                <li>8% more for adult clothing</li>
                <li>13% more for personal care products</li>
                <li>8% more for senior/home health care products</li>
              </ul>

            <div className="when-was-the-pink-tax-introduced"><h5><b>When Was the Pink Tax Introduced?</b></h5></div>

              <p>Women being charged a higher price for things isn’t new. The sales tax system in the United States was created decades ago. Politicians had to decide which products would be subject to a sales tax and which would be tax-free. But things have changed since these decisions came about, and tax policies have not changed to reflect the times.</p>

              <p>Some things, like women’s clothing, have higher tariffs when imported from abroad than do men’s clothing. Manufacturers of consumer goods like those razors claim that the cost of product design and marketing for women’s products cost more, and they pass those costs down to female consumers.</p>

            <h5><b><center>Pink Tax Examples</center></b></h5>

              <p>It’s pretty hard to avoid the gender tax when it’s applied to things all of us have to buy or pay for. Here are just a few things women are paying more for.</p>

              <p><b>Clothes</b></p>
                <p><a href="https://www.cbsnews.com/news/how-old-navy-is-stirring-up-a-plus-sized-gaffe/" rel="noopener" class="link">Old Navy</a> got busted for charging more for women’s plus-size clothing but not for men’s. The plus-sized women’s jeans were $12-15 more than the standard sized ones. But there was no such difference between the prices of men’s plus and regular-sized jeans.</p>

                <p>Gap, who owns Old Navy, released a statement that the additional cost was because “they are created by a team of designers who are experts in creating the most flattering and on-trend plus styles, which includes curve-enhancing and curve-flattering elements such as four-way stretch materials and contoured waistbands, which most men’s garments do not include.”</p>

                <p>The words “flattering and on-trend” aren’t exactly ones that spring to mind when I think of Old Navy. <a href="https://www.cnn.com/2007/WORLD/asiapcf/10/29/gap.labor/" class="link">Cheaply made</a>, and ready for the rag bag after a couple of washes are what I think.</p>

                <p><a href="https://www.listenmoneymatters.com/thrifting/" class="link">Women’s clothing</a> cost more than men’s in six of seven categories, except underwear, which cost an average of 29% more for men. The clothing product category that had the most significant price difference by percent was women’s shirts, which cost 15% more on average than men’s shirts.</p>

              <p><b>Dry Cleaning</b></p>
                <p>Dry cleaners are another place women will pay more for the same service. Men’s shirts cost an average of <a href="https://www.washingtonpost.com/blogs/the-fix/wp/2014/04/08/women-of-america-president-obama-wants-to-lower-your-dry-cleaning-bill/" rel="noopener" class="link">$2.86</a> for dry cleaning and women’s cost $4.95. But a woman’s dress shirt doesn’t require any different dry cleaning technique than a man’s shirt.</p>

              <p><b>Self Care Products</b></p>
                <p>These are the kinds of things you buy in a drug store, razors, shaving cream, deodorant, face cleanser. These kinds of products are prime offenders when it comes to charging women more for the “pink” products.</p>

                <p>Here’s what you can do ladies, <b>just buy the men’s stuff!</b> Unless you purchase the fancy razors with multiple blades and “moisture strips,” the only difference between generic old stick razors for men and women is that our’s are pink, and their’s are blue. Surprisingly, color has little effect on the hair removal process.</p>

                <p>And buy a <b>big</b> old can of <a title="Barbasol" href="https://www.amazon.com/dp/B00MX3N4QE?linkCode=ogi&amp;th=1&amp;psc=1&amp;tag=listenmoney-20" class="link" rel="nofollow" target="_blank">Barbasol</a>. The stuff has been around since 1919 for a reason. Lasts forever, works great, and whatever you’re shaving won’t smell like the inside of a raspberry pop tart. Women’s shaving creams have the nastiest, synthetic smells.</p>

                <p>You’re not out of the drug store yet. If you have internal rather than external plumbing, you are going to spend about $3,000 throughout your life on pads or tampons. Jessica Valenti wrote a piece in the <a href="https://www.theguardian.com/commentisfree/2014/aug/11/free-tampons-cost-feminine-hygiene-products" rel="noopener" class="link">Guardian</a> last year wondering why these products weren’t free or at least not taxed.</p>

                <p>The backlash was swift and vitriolic. You would have thought she had the nerve to say that insurance shouldn’t cover <a href="https://www.politico.com/story/2014/03/barbara-boxer-obamacare-birth-control-viagra-104990.html" rel="noopener" class="link">Viagra</a>! The tampon tax has its own niche in the gender tax world and for good reason. While women can avoid paying the pink tax in some cases by choosing the male version of something, there is no option when it comes to menstrual products.</p>

                <img class="faux-big" src="https://www.listenmoneymatters.com/wp-content/uploads/2015/03/Screen-Shot-2017-12-14-at-12.12.51-PM.jpg" alt="unequally priced men's and women's razors" title="unequally priced men's and women's razors"></img>
              <br></br>

              <p><b>Toys</b></p>
                <p>Unfortunately, the pink tax starts at birth. Across the six product categories of toys, the girls’ items were consistently more expensive than ones for boys. The most significant price discrepancy was in helmets and knee/elbow pads. <b>The girls’ were priced a whopping 13% higher.</b> If you buy things for children, you probably already know of the price disparity.</p>

                <img class="faux-big" src="https://www.listenmoneymatters.com/wp-content/uploads/2015/03/Screen-Shot-2017-12-14-at-12.23.22-PM.jpg" alt="unequal toy pricings" title="unequal toy pricings"></img>

                <p>Some of these companies are taking the “pink” in pink tax very seriously. Similarly, a pink kid’s beginner bike from Target.com was $80, while the non-pink version was $64.</p>

                <p>Boomerang Commerce did a study of 50 popular kids products at six online retailers, including Target, <a href="https://www.listenmoneymatters.com/amazon-flex/" class="link">Amazon</a>, Walmart, Macy’s, JCPenney, and Bloomingdales. They analyzed items in a variety of colors, and every time, <b>the pink-colored item was the most expensive</b>. Pink items, compared to other colors, ranged from 2-15% more.</p>

              <p><b>Vehicle Repair</b></p>
                <p>I think this one is an old cliche, but it’s true. <a href="https://insight.kellogg.northwestern.edu/article/the_importance_of_appearing_savvy" class="link">Northwestern did a study</a> that had men and women call various repair shops asking about the cost of having a radiator replaced. Women who seemed clueless on the phone were quoted $406 for a job that should cost $365. Men who acted similarly uninformed were quoted $383.</p>

              <p>The NYC Department of Consumer Affairs study found that when women bought used cars, they were twice as likely to have been quoted a higher price than men. It pays to do enough research before making these kinds of inquiries to have a ballpark figure of what you should expect to pay.</p>

              <p>And that goes for <b>both</b> sexes no matter what they are paying for. People will take advantage of uninformed consumers no matter what their gender.</p>

            <div className="how-do-you-avoid-the-pink-tax"><h5><b>How Do You Avoid the Pink Tax?</b></h5></div>
              <p>Did you know, tampons and pads are subject to sales tax because they are considered “luxury” items. Periods are certainly <b>not</b> a luxury, and I’m sure every woman would agree.</p>

              <p>Recently, some companies have been stepping up against unfair pricing and making moves towards high-quality ultra-low cost prices. <a href="https://www.listenmoneymatters.com/harrys/" target="_blank" rel="nofollow" class="link">Harry’s</a> is one of them.</p>

              <p>Harry’s is a gender-neutral product first company that sells shaving products and other excellent skincare products that are of the cheapest you can find without compromising on quality. Yes, <b>finally</b> an <a href="https://www.listenmoneymatters.com/harrys/" target="_blank" rel="nofollow" class="link">affordable shave club that works for women</a>.</p>

              <img class="faux-big" src="https://www.listenmoneymatters.com/wp-content/uploads/2015/03/harrys_razors.jpg" alt="Harry's razors" title="Harry's razors"/>
              <p>Billie offers a similar service.</p>

              <p><a href="https://www.boxed.com/rethinkpink/" class="link">Boxed</a> is another company fighting the good fight. They’re <b>Rethinking Pink</b> and standing up to the pink tax. Boxed is enforcing price equality for women, on a per ounce or per unit basis for products that typically cost more for women than men. And my favorite, <b>no taxation for tampons</b>.</p>

              <p>The best way to avoid this is to buy the men’s version of certain products simply and to do some homework and shop around for the best prices on things like dry cleaning. Or do what one women’s rights group did in France. They started a <a href="https://womantax.tumblr.com/" rel="noopener" class="link">site</a> and uploaded photos of products that had unequal pricing.</p>

              <p>Publicly shaming companies sometimes has a positive impact. Putting them on blast through Twitter will often garner faster results than writing letters and signing petitions.</p>

            <div className="pink-tax-legislation"><p><b>Pink Tax Legislation</b></p></div>
              <p>As a country, we are making some progress on this issue. Under the Affordable Care Act, insurance companies can no longer charge women more for identical services. Insurers must also cover birth control, which is much more of a human right than Viagra.</p>

              <p>In 2018, Democratic Representative Jackie Speier introduced the <a href="https://www.govtrack.us/congress/bills/115/hr5464" class="link">Pink Tax Repeal Act</a> intended to:</p>

            <h5 id="quoteblk">…prohibit the pricing of consumer products and services that are substantially similar if such products or services are priced differently based on the gender of the individuals for whose use the products are intended or marketed or for whom the services are performed or offered.</h5>

              <p>The bill failed. In 2019, lawmakers in <a href="https://www.nytimes.com/2019/07/12/us/tampon-tax.html" class="link">22 states</a> introduced bills that would repeal the tampon tax, but none went into law. Other countries are <a href="https://www.nytimes.com/2019/07/12/us/tampon-tax.html" class="link">making more progress.</a>.</p>

            <h3 id="quoteblk">Around the world, Canada, India, Malaysia and Australia have nixed the tax, and Britain is on track to do so once Brexit negotiations are settled.</h3>

              <p>Sorry to deliver more bad news ladies, but if you are aware of stuff like this, you can avoid it. Tax day is unavoidable &#40;unless you’re in the 1%&#41;, but you can sometimes avoid the Pink Tax if you know how to spot it.</p>           
          </article>
          <br></br>
          <div class="author_box"> 
            <span class="profile_image">
                <figure>
                    <div class="faux-ratio">                   
                        <img class="profile_image" src="https://secure.gravatar.com/avatar/85991130c76e89385af3096f1cfd1e97?s=154&amp;d=mm&amp;r=g" alt="Candice Elliott - Senior Editor" title="Candice Elliott - Senior Editor"/>
                    </div>
                </figure> 
            </span> 
            <br></br>
            <span class="profile_description"> 
                <a class="link" href="https://www.listenmoneymatters.com/team/candice-elliott/">Candice Elliott</a> is a substantial contributor to Listen Money Matters. She has been a personal finance writer since 2013 and has written extensively on student loan debt, investing, and credit. She has successfully navigated these areas in her own life and knows how to help others do the same. Candice has answered thousands of questions from the LMM community and spent countless hours doing research for hundreds of personal finance articles. She happily calls New Orleans, Louisiana home-the most fun city in the world. 
            </span>
            <div class="clearfix">
            </div>
          </div>
        </Page>
      </div>
    );
  }
}
 
